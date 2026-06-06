# EvalúaAI — Landing Page

> IA especializada para automatizar la burocracia del PIE chileno.

## Abrir en VSCode

1. **Descomprime** el ZIP en la carpeta que quieras
2. Abre VSCode → `File → Open Folder` → selecciona `evaluaai-landing`
3. VSCode detectará las extensiones recomendadas — acepta instalarlas

## Primer arranque

Abre el terminal integrado (`Ctrl+\`` en Windows/Linux, `Cmd+\`` en Mac):

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Atajos VSCode incluidos

| Acción | Cómo |
|--------|------|
| Arrancar servidor dev | `Ctrl+Shift+B` |
| Arrancar con debugger | `F5` → "▶ Next.js dev server" |
| Build de producción | `Ctrl+Shift+P` → "Run Task" → "build" |
| Formatear archivo | `Shift+Alt+F` |

## Estructura

```
evaluaai-landing/
├── .vscode/
│   ├── settings.json      # Formato automático al guardar
│   ├── extensions.json    # Extensiones recomendadas
│   ├── launch.json        # Debugger Next.js
│   └── tasks.json         # Tareas npm desde VSCode
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── Navbar.js / .module.css
│   ├── Hero.js / .module.css
│   ├── Problem.js / .module.css
│   ├── HowItWorks.js / .module.css
│   ├── ForWhom.js / .module.css
│   ├── CTA.js / .module.css
│   └── Footer.js / .module.css
├── public/
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── next.config.js
└── package.json
```

## Deploy a Vercel

```bash
git init && git add . && git commit -m "feat: initial landing"
git remote add origin https://github.com/TU_USUARIO/evaluaai-landing.git
git branch -M main && git push -u origin main
```

Luego en vercel.com → New Project → importa el repo → Deploy. Listo.
