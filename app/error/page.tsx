export default function ErrorPage() {
  return (
    <main className="flex flex-col justify-center items-center p-20">
      <h1 className="text-6xl font-extralight text-center">
        500
        <br />
        Internal Server Error
        </h1>
      <p className="text-xl text-center font-extrabold">
        Sorry, there was a problem sending your form. Please try again later..
      </p>
    </main>
  );
}