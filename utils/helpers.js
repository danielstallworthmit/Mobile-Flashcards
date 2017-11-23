import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

export function getDeckInfo (deck) {
    const info = [
        {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle method'
                }
            ]
        },
        {
            title: 'Javascript',
            questions: [
                {
                    question: 'What is a clojure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared'
                },
                {
                    question: 'Is Javascript Cool?',
                    answer: 'Yes, it is very cool'
                }
            ]
        },
    ]
    return typeof deck === 'undefined'
        ? info
        : info[deck]
}

const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: 'Complete your quiz for the day!',
        body: 'Do not forget all of the things you have worked so hard to learn!',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(20)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}