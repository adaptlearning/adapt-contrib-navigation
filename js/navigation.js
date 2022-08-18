import Adapt from 'core/js/adapt';
import NavigationView from './NavigationView';
import Backbone from 'backbone';

class NavigationController extends Backbone.Controller {

  initialize() {
    this.listenTo(Adapt, 'adapt:preInitialize', this.addNavigationBar);
  }

  addNavigationBar() {
    const adaptConfig = Adapt.course.get('_navigation');
    if (adaptConfig?._isDefaultNavigationDisabled) {
      Adapt.trigger('navigation:initialize');
      return;
    }
    Adapt.navigation = new NavigationView(); // This should be triggered after 'app:dataReady' as plugins might want to manipulate the navigation
  }

}

export default new NavigationController();
