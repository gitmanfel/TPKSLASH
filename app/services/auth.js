import Service,{inject as service}from '@ember/service';
import {action} from '@ember/object'
const AUTH_KEY = "TPKLACK-userid"
export default class AuthService extends Service {
    @service router;
    @service cookies;
    loginWithUserId(userId){       
        this.cookies.write(AUTH_KEY,userId)
        this.router.transitionTo('teams')
    }
    get currentUserId(){
        return this.cookies.read(AUTH_KEY);
    }
    get isAuthenticated(){
        return !!this.currentUserId
    }
    @action
    logout(){
        this.cookies.write(AUTH_KEY);
        this.router.transitionTo('login');
    }
}
