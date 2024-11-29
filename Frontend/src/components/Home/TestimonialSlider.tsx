import { testimonials } from "../../data/testimonial";

const TestimonialSlider: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-10">
      <div className="flex animate-scroll gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-72 bg-white rounded-lg shadow-lg p-5 text-center cursor-pointer hover:shadow-2xl transition duration-300 hover:text-gray-800"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-sm italic mb-4">"{testimonial.text}"</p>
            <div className="font-medium">{testimonial.name}</div>
            <div className="text-gray-500 text-sm">{testimonial.role}</div>
            <div className="mt-2 text-gray-400">{testimonial.companyLogo}</div>
            <div className="mt-2 text-yellow-500">
              {"★".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
        {/* Duplicate content for infinite effect */}
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id + "-duplicate"}
            className="flex-shrink-0 w-72 bg-white rounded-lg shadow-lg p-5 text-center cursor-pointer hover:shadow-2xl transition duration-300 hover:text-gray-800"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <p className="text-sm italic mb-4">"{testimonial.text}"</p>
            <div className="font-medium">{testimonial.name}</div>
            <div className="text-gray-500 text-sm">{testimonial.role}</div>
            <div className="mt-2 text-gray-400">{testimonial.companyLogo}</div>
            <div className="mt-2 text-yellow-500">
              {"★".repeat(testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestimonialSlider;
