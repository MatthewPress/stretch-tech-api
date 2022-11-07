/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  await knex('advice').del()
  await knex('advice').insert(
  [
    {id: 1, emotion_id: 1, content: "Think before you speak. Take a few moments to collect your thoughts before saying anything."},
    {id: 2, emotion_id: 1, content: "Step away from the situation and come back when you're calm."},
    {id: 3, emotion_id: 1, content: "Get moving! Physical activity can help reduce stress that makes you angry."},
    {id: 4, emotion_id: 1, content: "Instead of focusing on what made you mad, work on resolving the problem!"},
    {id: 5, emotion_id: 1, content: "Forgiveness is a powerful tool! Holding grudges allows anger and other negative emotions to overpower positive ones."},
    {id: 6, emotion_id: 2, content: "Get moving! Daily exercise naturally produces stress-relieving hormones in your body and improves your overall health."},
    {id: 7, emotion_id: 2, content: "Get restful sleep. Sleeping problems are common when you're stressed out so make sure you get enough rest."},
    {id: 8, emotion_id: 2, content: "Identify the underlying cause of your stress. Sort the possible reasons for your stress into those with a practical solution."},
    {id: 9, emotion_id: 2, content: "Take time to relax. Find a balance between responsibility to others and responsibility to yourself and prioritize your wellbeing."},
    {id: 10, emotion_id: 2, content: "Practice mindfulness. Research suggest mindful meditation can reduce the effects of stress, anxiety, and other related problems."},
    {id: 11, emotion_id: 3, content: "Take a time out! When you're feeling afraid or anxious, you're not able to think clearly, so take time for yourself so you can calm down."},
    {id: 12, emotion_id: 3, content: "Look at the evidence! Challenge your fearful thoughts by asking yourself how realistic that fear is. What would you say to a friend who was feeling similarly?"},
    {id: 13, emotion_id: 3, content: "Practice deep-breathing exercises, imagine a relaxing scene, or repeat a calming word or phrase. Listen to music or write in a journal."},
    {id: 14, emotion_id: 3, content: "Remain as calm as as possible. See what can be done for yourself and for others as well."},
    {id: 15, emotion_id: 3, content: "Ask for support! Sharing your fears can help remove their influence on your thoughts. Talk to your loved ones or reach out to your doctor or a therapist for professional help."},
    {id: 16, emotion_id: 4, content: "Talk it out and share your thoughts and concerns with a trusted friend or loved one who can give you empathy and understanding."},
    {id: 17, emotion_id: 4, content: "Recognize what's within your control. Make an effort to let go of thoughts about the past and anticipations of the future."},
    {id: 18, emotion_id: 4, content: "Think about what can be done. Calming the mind helps give you the best chance of finding a solution to what caused the worry in the first place."},
    {id: 19, emotion_id: 4, content: "Try relaxation techniques like deep breathing, meditation, visualization, or yoga. "},
    {id: 20, emotion_id: 4, content: "Recognize when you begin to worry, examine your worries and ask yourself if you're being realistic, then replace your worry with a more realistic statement."},
    {id: 21, emotion_id: 5, content: "When we doubt our abilities, it's often because we don't want to make room for mistakes but mistakes are how we learn and grow."},
    {id: 22, emotion_id: 5, content: "Remember times when something challenging for yourself turned into something great. A lot of achievements are born from uncertainty and doubt. Remember the times when things have gone right because the same thing could happen now."},
    {id: 23, emotion_id: 5, content: "Comparison is the thief of joy. Everyone's journey and ideas of success are different. What we can control and focus on is our own path and where we want to take it, regardless of where other people are at or what they have done."},
    {id: 24, emotion_id: 5, content: "When negative thoughts creep in, take a moment to ask yourself if you really believe they're true."},
    {id: 25, emotion_id: 5, content: "Have faith in yourself. Even if you aren't the most confident about where you're at, practice accepting your strengths and all you have to offer."},
  ]
  )
}