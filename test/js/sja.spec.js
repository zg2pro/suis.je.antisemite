describe('sja.js spec', function () {

    var view;
    var timerCallback;

    beforeEach(function () {
        var fixture = '<div id="sjaApp"></div>';
        document.body.insertAdjacentHTML(
                'afterbegin',
                fixture
                );
        view = new AppView;
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });

    describe('when view is constructing', function () {
        it('should exist', function () {
            expect(view).toBeDefined();
        });
        it('should be an accordion', function () {
            setTimeout(function () {
                timerCallback();
            }, 10000);
            expect(timerCallback).not.toHaveBeenCalled();
            jasmine.clock().tick(20000);
            expect(timerCallback).toHaveBeenCalled();
            //    expect(view.$el.find('div.accordion')).toExist();
        });
    });

    afterEach(function () {
        document.body.removeChild(document.getElementById('sjaApp'));
        jasmine.clock().uninstall();
    });

});