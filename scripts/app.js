const CONTACTS = [
    {
        name: 'Michele',
        avatar: 'imgs/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                showPopup: false
            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                showPopup: false

            }
        ],
    },
    {
        name: 'Fabio',
        avatar: 'imgs/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent',
                showPopup: false


            },
            {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                showPopup: false


            },
            {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                showPopup: false


            }
        ],
    },
    {
        name: 'Samuele',
        avatar: 'imgs/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received',
                showPopup: false

            },
            {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received',
                showPopup: false

            }
        ],
    },
    {
        name: 'Luigi',
        avatar: 'imgs/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
                showPopup: false

            }
        ],
    },
    {
        name: 'Simone',
        avatar: 'imgs/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                showPopup: false

            }
        ],
    },
    {
        name: 'Salmira',
        avatar: 'imgs/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                showPopup: false

            }
        ],
    },
    {
        name: 'Loreandry',
        avatar: 'imgs/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                showPopup: false

            }
        ],
    },
    {
        name: 'Rex',
        avatar: 'imgs/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '13/08/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                showPopup: false

            },
            {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                showPopup: false

            }
        ],
    },
]

const app = new Vue({
    el: "#app",
    data: {
        contacts: CONTACTS,
        activeUser: {},
        userInput: "",
        userInputSearch: "",
        showPopup:false,
    },
    computed: {
        // Funzione che recupera l orario dell ultimo messaggio ricevuto dall active user
        activeUserLastAccess() {
            const msgsReceived = this.activeUser.messages.filter((msg) => msg.status === "received")

            if(msgsReceived == 0) {
                return moment().format("HH:mm")
            }

            const lastMsg = msgsReceived[msgsReceived.length -1].date;
            return this.formatDate(lastMsg)
        },
    },
    methods: {
        // Funzione che recupera al CLICK l'oggetto da stampare in CHAT
        onUserClick(clickedUser) {
            this.activeUser = clickedUser
        },

        // Funzione che manda messaggi e risponde
        sendAMsg() {
            this.activeUser.messages.push({
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.userInput,
                status: "sent",
                showPopup: false

            }),

            this.userInput = "",

            setTimeout(() => {
                this.activeUser.messages.push({
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    text: "Ok!",
                    status: "received",
                    showPopup: false

                })
            }, 1000)
        },

        // funzione che mi fa la ricerca dei nomi delle chat
        filterSearch(userInputSearch) {
            return this.contacts.filter(element => element.name.toLowerCase().includes(userInputSearch.toLowerCase()));
            // Se volessi filtrare solo i nomi che iniziano con dovrei usare strartsWith()
        },

        // Funzione che converte l'orario
        formatDate(string) {
            return moment(string , "DD/MM/YYYY HH:mm:ss").format("HH:mm")
        },

        // Stampa nelle chats l'ultimo messaggio del contatto
        UsersLastMsg(contact) {

            const msgsReceived = contact.messages

            if(msgsReceived == 0) {
                return "Non ci sono messaggi!"
            } else {
                return  lastMsg = msgsReceived[msgsReceived.length -1].text;
            }
        },

        // stampa ora dell'ultimo messaggio nella chat
        UsersLastMsgDate(contact) {
            const msgsReceived = contact.messages
            if(msgsReceived == 0) {
                return ""
            }
            const lastMsg = msgsReceived[msgsReceived.length -1].date;

            return this.formatDate(lastMsg)
        },

        // Funzione che stampa in ogni messaggio il proprio orario di invio
        activeUserMsgDate(message) {
            const dateMsg = message.date

            return this.formatDate(dateMsg)
        },

        
        // Al click del messaggio mostra il popup
        FunShowPopup(message) {
            message.showPopup = !message.showPopup
        },

        //
        deleteMsg(indexMsg) {

            this.activeUser.messages.splice(indexMsg , 1);
            // OggettoDaCancellare.splice(1 , indexMsg)
        }
    },

    beforeMount() {
        this.activeUser = this.contacts[1]
    }


})