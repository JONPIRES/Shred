import React from "react";
import "../HomePage/HomePage.css";

function HomePage() {
  return (
    <div className="homepage d-flex flex-column">
      <section className="">
      <div className=" d-flex align-items-center bg-warning">
          <p className=" container-fluid p-4" style={{ lineHeight: '1.8em' }}>
            <strong > <span className="fs-1">W</span>elcome to SHRED,</strong> where we are committed to helping you achieve your fitness goals. Whether you're looking to build muscle,
          lose weight, or improve your overall health and well-being, we've got everything you need to get started. With our expertly crafted workout plans,
          nutrition guides, and motivational resources, you'll have everything you need to transform your body and transform your life. Our community of fitness
          enthusiasts is here to support you every step of the way, providing a wealth of knowledge and encouragement to keep you motivated and on track. So what
          are you waiting for? Join us today and start your journey to a healthier, happier you!
        </p>
        <img
          src="https://st2.depositphotos.com/25557058/42679/v/600/depositphotos_426791560-stock-illustration-one-continuous-line-drawing-young.jpg"
          className=""
        />
      </div>
      <div className="d-flex align-items-center bg-info container-fluid">
        <div className="">
          <img
            src="https://st2.depositphotos.com/25557058/42679/v/600/depositphotos_426791518-stock-illustration-one-single-line-drawing-fit.jpg"
            className=""
          />
        </div>
        <div>
          <p className="container container-fluid p-4" style={{lineHeight:'1.8em'}}>
              <strong><span className="fs-1">A</span>t our site,</strong> we are dedicated to helping you reach your fitness goals through a variety of resources and tools. With our platform,
            users have access to pre-designed workout plans that cater to different fitness levels and goals. Moreover, our platform allows users to create
            their own custom exercises and add them to their workout plans. This feature enables users to tailor their workouts to their specific needs and preferences.
            Our platform also includes a workout tracking feature, where users can log their progress, set goals, and track their achievements. Furthermore, we provide a supportive community
            of like-minded individuals who are all working towards the same goal: improving their health and fitness. Our platform allows users to connect, share tips and advice, and encourage
            each other on as they progress through their fitness journeys. Join our community today and start reaching your fitness goals with us.
          </p>
        </div>
      </div>
        <h4 className="d-flex justify-content-center align-items-center  p-5 bg-light mt-2 fs-1" > <i>"Transform your body, transform your life: Start your fitness journey with us!"</i></h4>
      <div className="text-center border border-primary fs-2">
        GET SHREDDED TODAY. &nbsp;
        <button type="button" className="btn btn-light border border-dark">
          SIGN UP
        </button>
      </div>
      </section>
    </div>
  );
}
export default HomePage;
