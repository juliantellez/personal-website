---
title: Cracking the Coding Interview
published: false
---

# Cracking the Coding Interview

Prepare with real questions, practice with real problems and learn their patterns.

The focus of the book are algorithms, coding and design questions.

## 1. The interview Process

Assessment of your performance is usually based on the following:

- Analytical Skills:
  Did you need help?
  How optimal was the solution?
  How long did it take?
  Did you structure the problem well?
  Did you look at the trade-offs of diff decisions?
- Coding Skills:
  Where you able to translate the algorithm into code?
  Was it well organized?
  Did you think about potential errors?
- Technical knowledge:
  Do you have a strong foundation in CS?
- Experience:
  Have you made good technical decisions in the past?
  Have you build interesting/challenging projects?
- Culture fit:
  Does your personality fit with the team?
  Did you communicate well with the interviewer?

Why are you being assessed this way?

- False negatives are acceptable:
  People who do bad in an interview but are in fact, very good.
  This one I don't get ? :(

- Problem solving skills are valuable:
  Smart people tend to do good things, and that is valuable to a company.

- Basic data structure and algorithms is useful
  Serves as a "proxy"

## 2. Behind the Scenes / 3. Special Situations

- For the interviewer

  - Avoid scary questions
  - Offer positive reinforcement
  - Probe deeper on behavioral questions
  - Coach your candidates
    - Guide them to write an example
    - Guide them to analyze their code conceptually first
    - If they dive into code before an optimal solution,
      pull them back to focus on the alogrithm
    - If they get nervous or stuck, walk them through the "brute force"
      solution and ask/look for areas to optimize
    - If their answer is obvious brute force, remind them that
      they can start with "brute force" and ask/look for areas to optimize
  - Give your candidate some time to think
  - Know your mode:
    - Sanity Check: Easy problems to filter out candidates
    - Quality Check: Challenging questions design to make the candidate think
    - Specialist Questions: Domain knowledge an engineer couldn't quickly learn on the job
    - Proxy Knowledge: Knowledge you would expect a candidate at their level to know

- For the company: You may get into trouble when:
  - ask specialist questions to people that aren't specialists
  - hire for specialist roles when they don't need specialists
  - need specialists but are only asserting sanity checks
  - ask sanity check questions but think you are asking quality check questions

## 4. Before the interview (page 26)

- For Students:

  - Take Big Project Classes
  - Get an internship
  - Start something: Build a project on your own time

- For Professionals:

  - Shift work responsibilities towards coding: Without revealing to your manager
    that you may be leaving
  - User your nights and weekends

- About your CV:

  - Keep it to 1 page
  - Employment History: Only relevant positions

- Preparation
  - Learn and master big O
  - Implement data structures and algorithms from scratch
  - Create a list to track mistakes you've made solving problems

## 5. Behavioral questions (page 32)

- For the candidate:

  - Ensure you can talk about your projects in detail

    - Challenges
    - Mistakes
    - Enjoyed
    - Leadership
    - Conflicts
    - What you would do differently?

  - What are your weaknesses?

## 6. Big O (page 38)

Big O is the language and metric we use to describe the efficiency of alogrithms

- Rules
  - if an algorithm performs f(N) steps, then it is O(f(N))
  - if an algorithm performs f(N) steps followed by g(N) steps,
    then it is O(f(N) + g(N))
  - if f(N) > g(N) for large N, then O(f(N) + g(N)) = O(f(N))
  - if an algorithm performs g(N) steps for each f(N) steps,
    then it is O(f(N) x g(N))
  - ignore constant multiples:
    O(C x f(N)) => O(f(N))
    O(f(CN)) => O(f(N))
