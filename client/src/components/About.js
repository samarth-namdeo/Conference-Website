import React from "react";
import { ImFontSize } from "react-icons/im";

export default function About() {
  return (
    <div className="flex-grow mt-20">
      <div className="my-5 mx-auto w-11/12">
        <h1 className="mb-20 text-center text-6xl font-extrabold tracking-normal text-gray-800 ">
          About Us
        </h1>

        <div className="my-8 text-center ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-700">
              About NITK
            </h2>
            <p className="text-justify text-xl font-arial mb-10">
            National Institute of Technology Karnataka, Surathkal is located
              in Mangalore City, Karnataka State, India. The Institute was
              established as Karnataka Regional Engineering College (KREC) in
              1960, and upgraded as National Institute of Technology Karnataka
              (NITK) in 2002. Mangalore is the headquarters of the coastal
              district of Dakshina Kannada, and boasts an important centre of
              education, business and trade in the state. Sri. U. Srinivasa
              Mallya, a visionary and a philanthropist, contributed immensely to
              the development of the coastal region of Karnataka, and his effort
              towards establishment of KREC (now NITK) is the most significant
              one. In recognition of his role as the founder and architect of
              the institute, the campus premises is named after him as
              Srinivasnagar.
            </p>

            {/* Image and video section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src="https://pedes2024.org/static/img/nitk.webp"
                  alt="An image of the Main Building of NITK"
                  className="h-auto max-h-full max-w-full"
                />
              </div>
              <div className="flex justify-center">
                <div className="max-w-500 mx-auto w-full">
                  <div
                    style={{
                      margin: "20px",
                      border: "1px solid #ccc",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "75%",
                        height: "0",
                        overflow: "hidden",
                      }}
                    >
                      {/* YouTube Video */}
                      <iframe
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        src="https://www.youtube.com/embed/vEYwgdjac5Y?si=WRvgSyu3P_sHLFbi"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About the EEE department */}
        <div className="my-8 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-700">
              About Electrical and Electronics Engineering Department
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
              <p class="max-w-lg p-4 bg-white shadow-md rounded-md text-gray-700">
      The EEE Department at NIT Karnataka, established in 1960, has evolved to offer a specialized 
      postgraduate program in Power and Energy Systems since 1992, and Ph.D. programs since 2003. The 
      department boasts cutting-edge laboratories and a dynamic faculty engaged in teaching, research, 
      and industry collaboration. Key research areas include Smart Grid Operation & Control, Power 
      Electronics & Renewable Energy, Biomedical Imaging & Signal Processing, Electric Vehicle & Wireless 
      Power Transfer, and Artificial Intelligence & Machine Learning.
      Faculty accolades include the Young Faculty Research Fellowship and the POSOCO award. The 
      department actively pursues externally funded research projects from entities like DST, SERB, MNRE, 
      CPRI, DELL, CDAC, Infineon, Texas Instruments, Schneider Electric, L&T, Robert Bosch, and MeitY. 
      Additionally, the department undertakes consultancy projects, resulting in numerous publications, 
      including patents, in international journals and conferences throughout the year.
    </p>
              </div>
              <img
                src="https://pedes2024.org/static/img/eee_dept.jpg"
                alt="An image of the EEE department of NITK"
              />
            </div>
          </div>
        </div>

        {/* About Mangalore */}
        <div className="my-8 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-700">
              About Mangalore
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="https://media.istockphoto.com/id/644355056/photo/splendid-view-of-green-clean-mangalore.jpg?s=612x612&w=0&k=20&c=gY3dpBqpiuf_o5jqpHO86_VFqlrqOmS1t1mCVNjsCPE="
                alt="Mangalore Image"
              />
              <div className="flex justify-center">
              <p class="max-w-lg p-4 bg-white shadow-md rounded-md text-gray-700">
                Mangalore, a coastal city in the southwestern state of Karnataka, India, is renowned 
                  for its picturesque landscapes, vibrant culture, and historical significance. Nestled 
                  between the Arabian Sea and the Western Ghats, Mangalore is a melting pot of diverse 
                  communities, fostering a rich tapestry of traditions and languages. The city is celebrated 
                  for its unique cuisine, influenced by a blend of coastal flavors and aromatic spices. 
                  Mangalore is also a hub of educational institutions and economic activities, with a 
                  thriving port adding to its commercial importance. Visitors are drawn to its pristine 
                  beaches, such as Panambur and Tannirbhavi, and iconic landmarks like the Kadri Manjunath 
                  Temple and St. Aloysius Chapel, showcasing a harmonious coexistence of religious diversity. 
                  Overall, Mangalore captivates with its enchanting coastal beauty, cultural vibrancy, and a 
                  dynamic blend of modernity and tradition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
