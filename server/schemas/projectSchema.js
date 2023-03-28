const projectSchema = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          {title: 'React', value: 'webDev'},
          {title: 'Javascript', value: 'mobileDev'},
          {title: 'CSS/SCSS/Tailwind', value: 'desktopDev'},
        ],
      },
    },
    {
      name: 'liveProjectLink',
      title: 'Live Project Link',
      type: 'url',
    },
    {
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
    },
  ],
}

export default projectSchema
