import "../assets/style/style.css";

export const PageNotFound = () => {
  return (
    <section className="flex items-center">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1>404</h1>
          <p>We don't have that coffee yet.</p>
          <a href="##">Let's go back to the menu.</a>
        </div>
      </div>
    </section>
  );
};
