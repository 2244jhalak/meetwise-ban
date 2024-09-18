import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#F8ECFF] py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-3/5 w-full text-center md:text-left p-5">
          <h1 className="text-4xl font-bold mb-4">
            Elevate Your Meetings with AI-powered Recording
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            With our advanced artificial intelligence technology, your meetings
            are not just recorded – they're transformed into valuable insights
            and productivity boosters.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mb-6">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
              Start for Free
            </button>
            <button className="bg-transparent border border-purple-600 text-purple-600 px-6 py-3 rounded-md hover:bg-purple-600 hover:text-white">
              Watch Demo
            </button>
          </div>
          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-2xl font-semibold">
              10K+ <span className="block text-sm font-normal">Users</span>
            </div>
            <div className="text-2xl font-semibold">
              23+ <span className="block text-sm font-normal">Countries</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/5 w-full p-5 flex flex-col items-center">
          <Image
            src="/banner/meetwise-banner-1.jpg"
            alt="Main Banner Image"
            width={600}
            height={400}
            className="w-full h-auto mb-6"
          />
          <div className="flex gap-4">
            <Image
              src="/banner/meetwise-banner-1.jpg"
              alt="Secondary Image 1"
              width={300}
              height={200}
              className="w-1/2 h-auto"
            />
            <Image
              src="/banner/meetwise-banner-1.jpg"
              alt="Secondary Image 2"
              width={300}
              height={200}
              className="w-1/2 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
