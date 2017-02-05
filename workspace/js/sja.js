
$(document).ready(function () {

    var Question = Backbone.Model.extend({
    });
    var Questions = Backbone.Collection.extend({
        model: Question,
        url: "data/questions.json"
    });
    var AllQuestions = new Questions();

    AllQuestions.bind('reset', function () {
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
            "click option.reply": "replyQuestion",
            "click button.next": "nextQuestion"
        },
        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function () {

//            this.input = this.$("#new-todo");
//            this.allCheckbox = this.$("#toggle-all")[0];
//
//            this.listenTo(Todos, 'add', this.addOne);
//            this.listenTo(Todos, 'reset', this.addAll);
//            this.listenTo(Todos, 'all', this.render);
//
//            this.footer = this.$('footer');
//            this.main = $('#main');

            AllQuestions.fetch({reset: true});

        },
        render: function () {
            var element = AllQuestions.at(this.cur);
            this.$el.find("div.question").html(element.get("statement"));
            var propositions = element.get("propositions");
            //TODO: do it with template func
            propositions = propositions.map(function (prop) {
                return "<li>" + prop + "</li>";
            });
            this.$el.find("div.propositions").html("<ul>" + propositions.join(" ") + "</ul>");
        },
        // If you hit return in the main input field, create new **Todo** model,
        // persisting it to *localStorage*.
        replyQuestion: function (e) {
//            if (e.keyCode != 13)
//                return;
//            if (!this.input.val())
//                return;
//
//            Todos.create({title: this.input.val()});
//            this.input.val('');
        },
        // Clear all done todo items, destroying their models.
        nextQuestion: function () {
            this.cur++;
            this.render();
        }

    });
    var App = new AppView;

});