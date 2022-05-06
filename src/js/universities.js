let universities = [
    {
        'name': 'POLIBA',
        'url': 'https://poliba.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://poliba.esse3.cineca.it/e3rest/docs/',
        'description': 'Politecnico di Bari'
    },
    {
        'name': 'UNIBAS',
        'url': 'https://unibas.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unibas.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi della Basilicata'
    },
    {
        'name': 'UNIBA',
        'url': 'https://www.studenti.ict.uniba.it/e3rest/api/',
        'swagger_url': '',
        'description': 'Università degli Studi di Bari Aldo Moro'
    },
    {
        'name': 'UNIBG',
        'url': 'https://sportello.unibg.it/e3rest/api/',
        'swagger_url': 'https://sportello.unibg.it/e3rest/docs/',
        'description': 'Università degli Studi di Bergamo'
    },
    {
        'name': 'UNIBS',
        'url': 'https://esse3.unibs.it/e3rest/api/',
        'swagger_url': 'https://esse3.unibs.it/e3rest/docs/',
        'description': 'Università degli Studi di Brescia'
    },
    {
        'name': 'UNICAL',
        'url': 'https://unical.esse3.cineca.it/e3rest/api/',
        'swagger_url': '',
        'description': 'Università della Calabria'
    },
    {
        'name': 'UNICAMPANIA',
        'url': 'https://esse3.cressi.unicampania.it/e3rest/api/',
        'swagger_url': '',
        'description': 'Università degli Studi della Campania Luigi Vanvitelli'
    },
    {
        'name': 'UNICAMPUS',
        'url': 'https://didattica.unicampus.it/e3rest/api/',
        'swagger_url': 'https://didattica.unicampus.it/e3rest/docs/',
        'description': 'Università Campus Bio-Medico di Roma'
    },
    {
        'name': 'UNICAM',
        'url': 'https://didattica.unicam.it/e3rest/api/',
        'swagger_url': 'https://didattica.unicam.it/e3rest/docs/',
        'description': 'Università di Camerino'
    },
    {
        'name': 'UNICA',
        'url': 'https://unica.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unica.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi di Cagliari'
    },
    {
        'name': 'UNICH',
        'url': 'https://unich.esse3.cineca.it/e3rest/api/',
        'swagger_url': '',
        'description': 'Università degli Studi G. D\'Annunzio Chieti Pescara'
    },
    {
        'name': 'UNIFI',
        'url': 'https://studenti.unifi.it/e3rest/api/',
        'swagger_url': 'https://studenti.unifi.it/e3rest/docs/',
        'description': 'Università degli Studi di Firenze'
    },
    {
        'name': 'UNIMARCONI',
        'url': 'https://unimarconi.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unimarconi.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi Guglielmo Marconi'
    },
    {
        'name': 'UNIME',
        'url': 'https://unime.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unime.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi di Messina'
    },
    {
        'name': 'UNIMIB',
        'url': 'https://s3w.si.unimib.it/e3rest/api/',
        'swagger_url': 'https://s3w.si.unimib.it/e3rest/docs/',
        'description': 'Università degli Studi di Milano-Bicocca'
    },
    {
        'name': 'UNIMORE',
        'url': 'https://www.esse3.unimore.it/e3rest/api/',
        'swagger_url': '',
        'description': 'Università degli Studi di Modena e Reggio Emilia'
    },
    {
        'name': 'UNINSUBRIA',
        'url': 'https://uninsubria.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://uninsubria.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi dell\'Insubria'
    },
    {
        'name': 'UNIPG',
        'url': 'https://unipg.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unipg.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi di Perugia'
    },
    {
        'name': 'UNIPI',
        'url': 'https://www.studenti.unipi.it/e3rest/api/',
        'swagger_url': 'https://www.studenti.unipi.it/e3rest/docs/',
        'description': 'Università di Pisa'
    },
    {
        'name': 'UNIPR',
        'url': 'https://unipr.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://www.studenti.unipi.it/e3rest/docs/',
        'description': 'Università di Parma'
    },
    {
        'name': 'UNIPV',
        'url': 'https://studentionline.unipv.it/e3rest/api/',
        'swagger_url': 'https://studentionline.unipv.it/e3rest/docs/',
        'description': 'Università degli Studi di Pavia'
    },
    {
        'name': 'UNIRSM',
        'url': 'https://unirsm.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unirsm.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi della Repubblica di San Marino'
    },
    {
        'name': 'UNISANNIO',
        'url': 'https://unisannio.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://unisannio.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi del Sannio'
    },
    {
        'name': 'UNITN',
        'url': 'https://www.esse3.unitn.it/e3rest/api/',
        'swagger_url': 'https://www.esse3.unitn.it/e3rest/docs/',
        'description': 'Università degli Studi di Trento'
    },
    {
        'name': 'UNITO',
        'url': 'https://esse3.unito.it/e3rest/api/',
        'swagger_url': 'https://esse3.unito.it/e3rest/docs/',
        'description': 'Università di Torino'
    },
    {
        'name': 'UNITS',
        'url': 'https://esse3.units.it/e3rest/api/',
        'swagger_url': 'https://esse3.units.it/e3rest/docs/',
        'description': 'Università degli Studi di Trieste'
    },
    {
        'name': 'UNIUD',
        'url': 'https://uniud.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://uniud.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi di Udine'
    },
    {
        'name': 'UNIURB',
        'url': 'https://uniurb.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://uniurb.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi di Urbino Carlo Bo'
    },
    {
        'name': 'UNIVAQ',
        'url': 'https://univaq.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://univaq.esse3.cineca.it/e3rest/docs/',
        'description': 'Università degli Studi dell\'Aquila'
    },
    {
        'name': 'UNIVE',
        'url': 'https://esse3.unive.it/e3rest/api/',
        'swagger_url': 'https://esse3.unive.it/e3rest/docs/',
        'description': 'Università Ca\' Foscari Venezia'
    },
    {
        'name': 'UNIVPM',
        'url': 'https://univpm.esse3.cineca.it/e3rest/api/',
        'swagger_url': 'https://univpm.esse3.cineca.it/e3rest/docs',
        'description': 'Università Politecnica delle Marche'
    } 
]

export default universities;