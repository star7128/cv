import React from 'react';
import paragraphs from "lines-to-paragraphs"

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <div className="my-5">
      <img
        className="rounded-full mx-auto w-32 lg:w-full xl:w-4/5"
        src="./profile.jpg"
        alt="profile"
      />
    </div>
    <p className="text-sm-left tracking-wide leading-relaxed lg:text-justify lg:mx-8 lg:text-lg">
      <div dangerouslySetInnerHTML={{ __html: paragraphs(data) }} />
    </p>
  </section>
);

export default Summary;
