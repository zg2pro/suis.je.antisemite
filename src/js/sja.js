var Question = Backbone.Model.extend({
    solutionIndex: function () {
        return this.get("propositions").findIndex(function (i) {
            return i.solution === 1;
        });
    }
});
var Questions = Backbone.Collection.extend({
    model: Question,
    url: "data/questions.json?random=" + new Date().getMilliseconds()
});
var Antisemite = Backbone.Model.extend({
    digest: function (curQuestion, repIndex) {
        var mapAntisemite = [];
        mapAntisemite["message"] = curQuestion.get("message");
        mapAntisemite["nazi"] = curQuestion.get("propositions")[repIndex].nazi > 0;
        mapAntisemite["djihadiste"] = curQuestion.get("propositions")[repIndex].djihadiste > 0;
        this.set(mapAntisemite);
    }
});
var AllQuestions = new Questions().bind('reset', function () {
    AllQuestions.reset(AllQuestions.shuffle(), {silent: true});
    AllQuestions.reset(AllQuestions.first(20), {silent: true});
    App.render();
});

var AppView = Backbone.View.extend({
    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#sjaApp"),
    cur: 0,
    // Delegated events for creating new items, and clearing completed ones.
    events: {
        "click a.reply": "replyQuestion",
        "click button.next": "nextQuestion"
    },
    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting todos that might be saved in *localStorage*.
    initialize: function () {
        AllQuestions.fetch({reset: true});
    },
    applyTemplate: function (input, target, templateFile) {
        if (templateFile === undefined) {
            templateFile = "sja.tpl";
        }
        var that = this;
        $.ajax({
            url: 'parts/' + templateFile + '?random=' + new Date().getMilliseconds(),
            type: "GET",
            dataType: "html",
            success: function (data) {
                var template = _.template(data, {});
                if (target === undefined) {
                    target = that.$el;
                }
                target.html(template(input.toJSON()));
            }
        });
    },
    render: function () {
        var element = AllQuestions.at(this.cur);
        this.applyTemplate(element);
    },
    replyQuestion: function (e) {
        var curQuestion = AllQuestions.at(this.cur);
        var repIndex = $(e.target).parents("div.panel").index();
        var correctInd = curQuestion.solutionIndex();
        if (correctInd === repIndex) {
            $(e.target).parents("div.panel-heading").addClass("good");
        } else {
            $(e.target).parents("div.panel-heading").addClass("wrong");
            var correctInd = curQuestion.solutionIndex();
            $($("div.panel-heading")[correctInd]).addClass("good");
            var antisemite = new Antisemite();
            antisemite.digest(curQuestion, repIndex);
            var newElement = $("<div class='antisemite'></div>");
            $("div.row.actions").before(newElement);
            this.applyTemplate(antisemite, newElement, "antisemite.tpl");
        }
        if ((correctInd === repIndex
                || !(antisemite.nazi || antisemite.djihadiste))
                && this.cur < AllQuestions.size() - 1) {
            $("button.next").removeClass("hide");
        }
    },
    // Clear all done todo items, destroying their models.
    nextQuestion: function () {
        this.cur++;
        this.render();
    }
});

$(document).ready(function () {
    var App = new AppView;
});
