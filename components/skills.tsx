import { FaReact, FaNodeJs } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
} from "react-icons/si"

const Skills = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What I Know</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of the technologies and tools I'm proficient in.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaReact className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">React</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience building interactive user interfaces with React and its ecosystem.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <IoLogoJavascript className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">JavaScript</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Strong understanding of JavaScript fundamentals and modern ES6+ features.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaNodeJs className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Node.js</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Backend development using Node.js and building RESTful APIs.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiTypescript className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">TypeScript</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with TypeScript for building scalable and maintainable applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaPython className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Python</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Python for scripting, automation, and data analysis.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <FaJava className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Java</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Java for building enterprise applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiMongodb className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">MongoDB</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with MongoDB for building scalable and flexible databases.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiExpress className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Express.js</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Express.js for building robust and scalable web applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiNextdotjs className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Next.js</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Next.js for building server-rendered React applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiTailwindcss className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Tailwind CSS</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Tailwind CSS for rapidly styling web applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiGit className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Git</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Proficient in using Git for version control and collaboration.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiDocker className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Docker</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Docker for containerizing applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiKubernetes className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Kubernetes</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Kubernetes for orchestrating containerized applications.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiTerraform className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Terraform</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Terraform for infrastructure as code.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <SiAnsible className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Ansible</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Experience with Ansible for configuration management and automation.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Skills
