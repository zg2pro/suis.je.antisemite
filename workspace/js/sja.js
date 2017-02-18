
$(document).ready(function () {

    var Question = Backbone.Model.extend({
    });
    var Questions = Backbone.Collection.extend({
        model: Question,
        url: "data/questions.json?random=" + new Date().getMilliseconds()
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
        applyTemplate: function (input, target) {
            var that = this;
            $.ajax({
                url: 'sja.tpl?random=' + new Date().getMilliseconds(),
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
            var correctInd = curQuestion.get("propositions").findIndex(function(i){return i.solution !== undefined;});
            if (correctInd === repIndex) {
                $("button.next").removeClass("hide");
                $(e.target).parents("div.panel-heading").addClass("good");
            } else {
                this.$el.html("Oui, vous êtes un antisémite.");
            }
        },
        // Clear all done todo items, destroying their models.
        nextQuestion: function () {
            this.cur++;
            this.render();
        }

    });
    var App = new AppView;

});