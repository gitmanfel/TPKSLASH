import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";
import {inject as service} from '@ember/service'

export default class LoginComponent extends Component {
    @tracked userId=0;
    @service auth;
    get isDisable(){
        return !this.userId;
    }

    handleSignIn(value){
        if(typeof value === 'string' && value.length >0)
        this.auth.loginWithUserId(value)
    }
    /**
     * @param {Event & {target:HTMLFormElement}} evt
     */
    @action
    onLoginSubmit(evt){
        evt.preventDefault();
        console.log('ok')
        if(this.userId)
        this.handleSignIn(this.userId)
    }
    /**
     * @param {Event & {target:HTMLFormElement}} evt
     */
    @action
    onLoginChange(evt){
        console.log(this.userId)
        this.userId = evt.target.value;
    }
}
