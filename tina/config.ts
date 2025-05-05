import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [

      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: 'footer',
        label: 'Footer',
        path: 'content/footer',
        format: 'md',
        fields: [
          {
            type: 'object',
            name: 'links',
            label: 'Footer Links',
            list: true,
            fields: [
              { type: 'string', name: 'label', label: 'Link Text' },
              { type: 'string', name: 'url', label: 'URL' }
            ]
          }
        ]
      },

      {
        name: "paginatemplate1",
        label: "Página Template 1",
        path: "content/paginatemplate1",
        fields: [
          {
            name: 'subtitle_text',
            label: 'Subtítulo',
            type: 'string',
          },
          {
            type: "string",
            name: "titulo",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            name: 'image_url',
            label: 'URL da imagem',
            type: 'string',
          },
          {
            name: 'video_url',
            label: 'URL do vídeo',
            type: 'string',
          },
          {
            name: 'button_text',
            label: 'Texto do primeiro botão',
            type: 'string',
          },
          {
            type: "rich-text",
            name: "conteudo",
            label: "Conteúdo",
            isBody: true,
            required: true,
          },

          {
            name: 'button_text_last',
            label: 'Texto do segundo botão',
            type: 'string',
          },

          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
        ],
      },
      {
        name: "paginatemplate2",
        label: "Página Template 2",
        path: "content/paginatemplate2",
        fields: [
          {
            name: 'subtitle_text',
            label: 'Subtítulo',
            type: 'string',
          },
          {
            type: "string",
            name: "titulo",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            name: 'image_url',
            label: 'URL da imagem',
            type: 'string',
          },
          {
            name: 'video_url',
            label: 'URL do vídeo',
            type: 'string',
          },
          {
            name: 'button_text',
            label: 'Texto do primeiro botão',
            type: 'string',
          },
          {
            type: "rich-text",
            name: "conteudo",
            label: "Conteúdo",
            isBody: true,
            required: true,
          },
          {
            name: 'button_text_last',
            label: 'Texto do segundo botão',
            type: 'string',
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
        ]
      },
    ],
  },
});
