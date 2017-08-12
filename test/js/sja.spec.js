describe('sja.js spec', function () {

    var view;

    beforeEach(function () {
        view = new AppView;
    });

    describe('when view is constructing', function () {
        it('should exist', function () {
            expect(view).toBeDefined();
        });
        it('should be an accordion', function () {
            expect(view.$el.find('div.accordion')).toExist();
        });
    });

});