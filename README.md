<div align="center">

# 🎮 Conway's Game of Life

### Un simulador interactivo del clásico autómata celular

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Canvas](https://img.shields.io/badge/Canvas-239120?style=for-the-badge&logo=html5&logoColor=white)

[Demo en vivo](#cómo-ejecutar) • [Características](#-características) • [Instalación](#-cómo-ejecutar)

---

</div>

## 📖 Sobre el Proyecto

Una implementación elegante y funcional del **Juego de la Vida de Conway** usando **HTML Canvas** y **TypeScript**. Este proyecto simula el fascinante comportamiento de autómatas celulares con una interfaz intuitiva y controles interactivos.

### 🎯 ¿Qué es el Juego de la Vida?

El Juego de la Vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, lo que significa que su evolución está determinada por su estado inicial, sin necesidad de entrada adicional.

## ✨ Características

- ▶️ **Controles intuitivos** - Iniciar, pausar y reiniciar la simulación
- ⚡ **Control de velocidad** - Ajusta la velocidad de simulación en tiempo real
- 📏 **Múltiples tamaños** - Presets de tamaño: x1, x2, x4
- 📊 **Contador de población** - Seguimiento en tiempo real de células vivas
- 🎲 **Generación aleatoria** - Nueva población al azar en cada reinicio
- 💻 **Renderizado fluido** - Visualización suave con HTML Canvas

## 🚀 Cómo Ejecutar

### Opción 1: Abrir directamente
1. Clona el repositorio: 
   ```bash
   git clone https://github.com/isegura-b/Conway-s-game-of-life.git
   cd Conway-s-game-of-life
   ```

2. Abre `index.html` en tu navegador favorito

### Opción 2: Con servidor local (recomendado)
```bash
# Usando npx (no requiere instalación)
npx serve .

# O con Python
python -m http.server 8000

# O con Node.js
npm install -g http-server
http-server
```

### 🔧 Compilar TypeScript (opcional)
Si modificas el código TypeScript: 
```bash
tsc gol.ts
```

## 🎮 Controles

| Control | Función |
|---------|---------|
| **▶️ Start** | Inicia la simulación |
| **⏸️ Stop** | Pausa la simulación |
| **🔄 Restart** | Genera una nueva población aleatoria |
| **⚡ Speed** | Deslizador para ajustar la velocidad de actualización |
| **📐 Size** | Botones para cambiar el tamaño del canvas (x1, x2, x4) |

## 📁 Estructura del Proyecto

```
Conway-s-game-of-life/
│
├── 📄 index.html      # Interfaz de usuario y elemento Canvas
├── 📝 gol.ts          # Lógica del juego en TypeScript
├── 🔧 gol.js          # JavaScript compilado
└── 📖 README.md       # Este archivo
```

## 🤔 ¿Por qué este proyecto? 

Este proyecto fue creado como una forma práctica de aprender **TypeScript** de manera hands-on. Me ayudó a comprender: 

- 📘 Sistema de tipos de TypeScript
- 🎨 Manipulación del DOM
- 🔄 Bucles de simulación
- 🎮 Interacción con Canvas API
- ⚙️ Arquitectura de aplicaciones frontend

## 📚 Reglas del Juego

El juego sigue estas cuatro reglas simples:

1. **Muerte por soledad**:  Una célula viva con menos de 2 vecinos vivos muere
2. **Supervivencia**: Una célula viva con 2 o 3 vecinos vivos sobrevive
3. **Muerte por sobrepoblación**: Una célula viva con más de 3 vecinos vivos muere
4. **Reproducción**: Una célula muerta con exactamente 3 vecinos vivos revive

## 🛠️ Tecnologías Utilizadas

- **TypeScript** - Tipado estático para JavaScript
- **HTML5 Canvas** - Renderizado gráfico
- **Vanilla JavaScript** - Sin frameworks, puro y simple

---

<div align="center">

Hecho con por [isegura-b](https://github.com/isegura-b)

</div>
