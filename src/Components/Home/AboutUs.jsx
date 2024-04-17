import * as React from "react";
import image from '../../Assets/Images/About-us.png';
import Heading from "../Heading";
import Paragraphs from "../Paragraphs";
import Button from "../Button";

function AboutUs() {
    return (
        <section className="justify-between sm:mt-8 mt-0  sm:py-14 py-4  px-4  max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex justify-center flex-col w-[41%] max-md:ml-0 max-md:w-full ">
                    <img
                        loading="lazy"
                        src={image}
                        alt="About Us"
                        className=" w-full aspect-square max-md:mt-10 max-md:max-w-full hideImage"
                    />
                </div>
                <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow justify-center  py-2.5 max-md:mt-10 max-md:max-w-full">
                        <div className="sm:text-left text-center">
                            <Heading blueText="About" whiteText="Us?" />
                        </div>
                        <Paragraphs
                            para="Welcome to GenAIForge Innovations, a pioneering force in educational technology based in Reading, Berkshire. Our mission is to revolutionize learning through the power of Generative AI, creating personalized and engaging educational content that caters to learners globally. With a team of passionate educators, technologists, and creators, we specialize in not just crafting adaptive educational materials, but also in providing full-stack development, web design, and quality assurance solutions. We pride ourselves on being more than just a service provider; we are a partner in innovation for educational institutions, content creators, and businesses seeking to transform the educational experience. At GenAIForge Innovations, we invite you to join us in our journey to shape the future of education, making it more accessible, engaging, and effective for everyone."
                        />
                        <div className="get-started-button">
                            {/* <button className="button-commonBtn justify-center self-start px-6 py-6 mt-8 text-lg font-semibold tracking-normal leading-5 text-black border-solid bg-[linear-gradient(93deg,#761DE8_-2.94%,#29BDEC_56.14%)] border-[3px] border-white border-opacity-10 rounded-[1000px] max-md:px-5">
                                Partner With Us
                            </button> */}
                            <div className="aboutUSBtn">
                            <Button btnText="Partner With Us"/>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs
