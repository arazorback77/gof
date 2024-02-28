# Work flow

1. create docusauru app with npx create-docusaurus@latest <appname> classic at github folder

2. cd <appname>

3. change into git repository >  git init

4. add repo with  github desktop

5. manage app with github desktop

6. publish to github remote

7. deploy to vercel with github remote


# 🍋 Features
1. Markdown
2. Search
3. SEO
4. Versioning
5. I18n
6. Custom ...
7. Deploy
8. Analytics
9. Comments
10. Auth
11. PWA

# TODO

1. Auth

2. MDX Custom

3. Utterance

4. Search

5. style...

6. 

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
