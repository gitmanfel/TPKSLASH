import Route from '@ember/routing/route';

export default class TeamsTeamRoute extends Route {
    model({teamId}){
        let teamsArray =this.modelFor('teams');
        const matches = teamsArray.filter(
            team => `${team.id}`===`${teamId}`

        )
        return matches[0];
    


    }
}
