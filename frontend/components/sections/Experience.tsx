import SectionLabel from '../ui/SectionLabel';

const timeline = [
  {
    title: 'Vistaar Systems technologies',
    description:
      'Worked on backend services and maintained production applications. Designed and developed REST APIs used by internal and external systems. Optimized SQL queries and improved application performance. Built transaction-safe workflows and automated business processes. Resolved live issues, monitored deployments, and handled support tickets.',
  },
  {
    title: 'Rising Phoenix',
    description: 'Developed Python automation solutions using the AWS Boto3 SDK to streamline cloud governance and resource management tasks. Built scripts to monitor AWS resources, generate compliance reports, automate tagging policies, and identify unused or non-compliant cloud assets. Worked with services such as EC2, S3, IAM, CloudWatch, and Lambda to improve operational efficiency and enforce governance standards across AWS environments.',
  },
];

export default function Experience() {

  return (

    <section id="about" className="px-6 md:px-12 py-24  mx-auto bg-gray-900">

      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <SectionLabel text="Where have I worked?" />
        <h2 className="text-4xl font-bold text-white">Industry experience.</h2>
      </div>

      <div className="relative border-l border-violet-500 ml-4">
        {timeline.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-2"></div>

            <h3 className="text-white font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>


    </section>
  );
}
