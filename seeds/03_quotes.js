/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('quote').del()
  await knex('quote').insert(
  [
    {id: 1, emotion_id: 1, content: "Anger makes you smaller, while forgiveness forces you to grow beyond what you were." },
    {id: 2, emotion_id: 1, content: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering" },
    {id: 3, emotion_id: 1, content: "Do not let your anger lead to hatred, as you will hurt yourself more than you would the other." },
    {id: 4, emotion_id: 1, content: "When angry count to ten before you speak. If very angry, count to one hundred." },
    {id: 5, emotion_id: 1, content: "It is wise to direct your anger towards problems - not people; to focus your energies on answers - not excuses" },
    {id: 6, emotion_id: 2, content: "It's not the events of our lives that shape us, but our beliefs as to what those events mean." },
    {id: 7, emotion_id: 2, content: "You can't always control what goes on outside, but you can always control what goes on inside." },
    {id: 8, emotion_id: 2, content: "Once you accept, truly accept, that stuff will happen to you and there is nothing you can do about it, stress miraculously leaves your life." },
    {id: 9, emotion_id: 2, content: "Remember that stress doesn't come from what's going on in your life. It comes from your thoughts about what's going on in your life." },
    {id: 10, emotion_id: 2, content: "Much of the stress that people feel doesn't come from having too much to do. It comes from not finishing what they've started." },
    {id: 11, emotion_id: 3, content: "Its okay to stress sometimes. " },
    {id: 12, emotion_id: 3, content: "I can step out of my comfort zone." },
    {id: 13, emotion_id: 3, content: "My past fears do not define me." },
    {id: 14, emotion_id: 3, content: "None of my worst fears ever came true." },
    {id: 15, emotion_id: 3, content: "What do we say to anxiety? Not today!" },
    {id: 16, emotion_id: 4, content: "Nothing in life is impossible; the word impossible even has the word possible." },
    {id: 17, emotion_id: 4, content: "Although I worry, I can also try to relax." },
    {id: 18, emotion_id: 4, content: "I have the power to live worry-free and happy." },
    {id: 19, emotion_id: 4, content: "I don't have to be perfect." },
    {id: 20, emotion_id: 4, content: "I can demand the best of myself and still be okay with failing." },
    {id: 21, emotion_id: 5, content: "Please remember that you're capable, brave and loved - even when it feels like you're not." },
    {id: 22, emotion_id: 5, content: "Small, baby steps each day add up to huge, giant leaps over time.  So, please keep going.  Do NOT give up." },
    {id: 23, emotion_id: 5, content: "Don't hate yourself for everything you aren't. Instead, love yourself for everything you are." },
    {id: 24, emotion_id: 5, content: "Be proud of who you are, instead of ashamed of how someone else sees you." },
    {id: 25, emotion_id: 5, content: "One day, if not already, your refusal to give up will inspire someone else." },
  ]
  )
}