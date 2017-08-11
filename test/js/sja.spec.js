describe('sja.js spec', function () {

    var view, model;

    beforeEach(function () {
        view = new AppView;
    });

    describe('when view is constructing', function () {
        it('should exist', function () {
            expect(view).toBeDefined();
        });
    });

});