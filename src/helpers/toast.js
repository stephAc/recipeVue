import Vue from "vue"
import Toasted from "vue-toasted";

Vue.use(Toasted, {
    iconPack: 'fontawesome'
});

Vue.toasted.register('error',
    payload => {
        if (!payload.message) {
            return "Une erreur est survenue."
        }

        return payload.message;
    }, {
        type: 'error',
        icon: 'exclamation',
        duration: 3000
    }
);

Vue.toasted.register('success',
    payload => {
        if (!payload.message) {
            return "Action bien effectuée"
        }

        return payload.message;
    }, {
        type: 'success',
        icon: 'check',
        duration: 1500
    }
);
