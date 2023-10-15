function createEvent(summary, eventStartTime, eventEndTime) {
    const { google } = require('googleapis')

    const { OAuth2 } = google.auth;

    const OAuth2Client = new OAuth2('425283682828-qn5idtnkss94e5hv94abuks7et6r1q7e.apps.googleusercontent.com',
    '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')

    OAuth2Client.setCredentials({
        refresh_token:
            '1//04ydVqgyYTGKwCgYIARAAGAQSNwF-L9IrS9Ntc0cGwooT7MkXjywrnZWmJRFybaMZT7MtVWTZ1A03_cwMaIcaRMRqHkfUgp5UB9g'
    })

    const calendar = google.calendar({version: 'v3', auth: OAuth2Client })

    /* create new events, likely replace with the python file that will get sent here */
    /*
    const eventStartTime = new Date()
    eventStartTime.setDate(eventStartTime.getDay() + 3)

    /*
       const eventEndTime = new Date()
        console.log(eventEndTime)
        eventEndTime.setDate(eventEndTime.getDay() + 3)
        eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)
    */  

    /* GOOGLE CALENDAR DOCS */
    const event = {
        summary: summary, 
        start: {
            dateTime: eventStartTime,
            timeZone: 'America/New_York',
        },
        end: {
            dateTime: eventEndTime,
            timeZone: 'America/New_York',
        },
        colorId: 1,
    }
    /* dont accidentally override or double book an event, not req */

    calendar.freebusy.query(
        {
        resource: {
            timeMin: eventStartTime,
            timeMax: eventEndTime,
            timeZone: 'America/New_York',
            /*array of calendars you are checking */
            items: [{ id: 'primary' }], 
            },
        }, 
        (err, res) => {
            if(err) return console.error('Free Busy Query Error: ', err)

            const eventsArr = res.data.calendars.primary.busy;
            

            if(eventsArr.length == 0) 
            return calendar.events.insert({ calendarId: 'primary', resource: event }, 
            err => {
                if(err) return console.error('Calendar Event Creation Error: ', err)
                return console.log('Calendar Event Created')
            },
            )
            return console.log('busy')
        }
    )
}

