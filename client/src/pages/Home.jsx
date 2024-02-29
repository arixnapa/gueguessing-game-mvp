export default function Home() {
  return (
    <div>
      <div className="fs-1">Welcome to GeoGuessing Game!</div>
      <p>
        GeoGuessing is an interactive game where you can put your geography
        skills to the test by guessing where random photos have been taken.
        Here's how to play:
      </p>
      <ul>
        <ol>
          1. Generate a Random Picture: Click on the button to receive a random
          photo.
        </ol>
        <ol>
          2. Guess the Location: Study the photo carefully and make your best
          guess about where it was taken. You can enter either the specific city
          name or the country name.
        </ol>
        <ol>
          3. Earn Points: If your guess is correct, you'll earn points based on
          the difficulty of the location.
        </ol>
        <ol>
          4. Compete and Improve: Challenge yourself to climb the leaderboard by
          earning as many points as possible. Use each guess as an opportunity
          to learn more about different places around the world.
        </ol>
      </ul>
      <p>
        Ready to put your geography knowledge to the test? Start playing
        GeoGuessing now!
      </p>
    </div>
  );
}
