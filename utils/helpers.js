
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