import { createClient } from "@sanity/client";

const client = createClient({
  withCredentials: true,
  projectId: "um5iy11r",
  dataset: "production",
  apiVersion: "2022-03-28",
  useCdn: false,
});

const query = `*[_type == "projects"]{
    image,
    projectName,
    description,
    projectType,
    liveProjectLink,
    sourceCode
  }`;

export default async function fetchData() {
  try {
    const data = await client.fetch(query);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
