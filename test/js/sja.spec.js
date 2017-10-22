describe('sja.js spec', function () {

    var view;

    beforeEach(function () {
        var fixture = '<div id="sjaApp"></div>';
        document.body.insertAdjacentHTML(
                'afterbegin',
                fixture
                );
        view = new AppView;
    });

    describe('when view is constructing', function () {
        it('should exist', function () {
            expect(view).toBeDefined();
        });
    });

    describe('when dom is ready', function () {
        beforeEach(function (done) {
            setTimeout(function () {
                done();
            }, 1000);
        });
        it('should be question and choices', function (done) {
            //one question
            expect(view.$el.find('h1.question')).toBeDefined();
            //at least two possible answers
            expect(view.$el.find('h4').length).toBeGreaterThan(1);
            done();
        });
    });



    afterEach(function () {
        document.body.removeChild(document.getElementById('sjaApp'));
    });

});