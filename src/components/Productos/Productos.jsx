const Productos = [
  {
    categoria: "Comida para perros y gatos",
    nombre: "Criadores",
    Descripcion:
      "Sieger Criadores all in One aporta proteínas de alta calidad y grasas saludables clave para el óptimo crecimiento y mantenimiento de las funciones vitales del organismo. Por eso, su principal ingrediente es una fuente de proteínas de alta calidad y digestibilidad.",
    presentacion: "21 Kg + 3 kg de Regalo",
    precio: 6.608,
    imagen: "https://i.postimg.cc/02xwGz7V/criadores.jpg",
    stock: 15,
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "Royal Canin",
    Descripcion:
      "Alimento húmedo para perros adultos de talla grande (de 26 a 44 kg). Desde los 15 meses hasta los 8 años de edad.",
    presentacion: "15Kg",
    precio: 13.698,
    imagen: "https://i.postimg.cc/NjC2wbSn/Royal-Canin.jpg",
    stock: 0,
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "Dog Chow",
    descripcion:
      "Alimento balanceado completo para perros adultos de tamaño mediano y grande de 1 a 7 años de edad. Equilibra la flora intestinal, Ayuda a mantener sus dientes limpios para una salud oral, Músculos y huesos fuertes, Promueve un pelaje brillante, Ayuda a mantenerlo sano y en forma.",
    presentacion: "Adultos Medianas Y Grandes 21kg + 3kg De Regalo",
    precio: 6643,
    imagen: "https://i.postimg.cc/vHz60Gzb/DogChow.jpg",
    stock: 20,
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "Mapu",
    descripcion:
      "Mapu presenta su fórmula de alta densidad nutritiva con nuevos ingredientes de calidad superior, la fórmula renovada de Mapu le brinda a los perros una vida más saludable y vital.",
    presentacion: "Perro Adulto 15 Kg",
    precio: 5766,
    imagen: "https://i.postimg.cc/jjWwqPrS/mapu.jpg",
    stock: 12,
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "Excellent",
    descripcion:
      "Los perros adultos tienen diferentes necesidades nutricionales que los cachorros o los perros maduros. PURINA® Excellent®  Adulto Pollo y Arroz – Razas Medianas y Grandes ofrece una fórmula completa que incluye aminoácidos esenciales, inulina, vitaminas, minerales y zeolita, aportando un óptimo balance nutricional y un sabor irresistible.",
    presentacion: "Adult Dog Raza Mediana Y Grande Smart 20kg +2kg Regalo",
    precio: 7862,
    imagen: "https://i.postimg.cc/K883VCqL/excellent.jpg",
    stock: 5,
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "EXCELLENT CAT ADULT",
    descripcion:
      "PURINA® Excellent® Adulto Pollo y Arroz, ofrece una fórmula con una óptima combinación de ingredientes, proteínas de alta digestibilidad y ácidos grasos omega 3 y 6, para mantener al máximo la salud del gato adulto.",
    presentacion: "3Kg",
    precio: 2844,
    stock: 20,
    imagen: "https://i.postimg.cc/N0hCLwZ4/excellent-cat-adult-x-3kg.jpg",
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "EXCELLENT ADULT SMALL",
    descripcion:
      "La selección de un alimento adecuado para tu mascota es muy importante para garantizar su crecimiento, desarrollo y salud. Con esta opción de Excellent podrás cubrir las necesidades nutricionales y energéticas de tu perro.",
    presentacion: "1Kg",
    precio: 550,
    stock: 12,
    imagen: "https://i.postimg.cc/MGyPQFS8/EXCELLENT-ADULT-SMALL.jpg",
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "EXCELLENT ADULT DOG SENIOR +7 años",
    descripcion:
      "Proteína para una nutrición completa. Alimento rico en proteína animal de alto valor biológico, contiene minerales como calcio, fósforo, potasio y hierro, vitaminas A, D y E, fibras y ácidos grasos esenciales. Estos nutrientes favorecen el fortalecimiento del sistema inmunológico de tu mascota y el correcto funcionamiento de sus sistemas vitales.",
    presentacion: "15Kg",
    precio: 6300,
    stock: 2,
    imagen:
      "https://i.postimg.cc/ydjLf3xQ/EXCELLENT-ADULT-DOG-SENIOR-7-a-os.jpg",
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "PRO PLAN DOG ADULTOS COMPLETE",
    descripcion:
      "Purina Pro Plan provee nutrición de avanzada que ayuda a los perros de razas medianas a mantenerse fuertes y llenos de vitalidad. A su vez, también ayuda a otras cosas claves en el cuidado de la mascota, tales como reforzar el sistema inmune, fortalecer la microflora intestinal y reforzar la barrera cutánea. ",
    presentacion: "3 Kg",
    precio: 3100,
    stock: 2,
    imagen: "https://i.postimg.cc/bNW3FhYh/PRO-PLAN-DOG-ADULTOS-COMPLETE.jpg",
  },
  {
    categoria: "Comida para perros y gatos",
    nombre: "PRO PLAN DOG PUPPY MEDIUM BREED",
    descripcion:
      "Purina Pro Plan Puppy Complete con OptiStart es un alimento balanceado para cachorros de razas medianas desde el destete hasta la edad adulta. Debido a su contenido de proteínas de calidad y digeribles, y bioactivos del calostro protege a tu cachorro de posibles problemas digestivos y favorece la absorción de nutrientes; promueve una piel sana y un pelaje brilloso.",
    presentacion: "15Kg",
    precio: 11500,
    stock: 0,
    imagen: "https://i.postimg.cc/Gp1zdxsg/PRO-PLAN-DOG-PUPPY-MEDIUM-BREED.jpg",
  },
  {
    categoria: "jueguete",
    nombre: "Hueso de cuero - Nosh",
    descripcion:
      "Diseñado específicamente para la dentición de cachorros y masticadores moderados, el NOSH FLEXIBLE Chew Bone combina nailon duradero con TPR flexible. Lo suficientemente fuerte como para soportar la masticación entusiasta de un cachorro pero lo suficientemente suave para las encías sensibles de los cachorros.",
    presentacion: "unitario",
    precio: 1547,
    stock: 250,
    imagen: "https://i.postimg.cc/mr0QQVvB/hueso.png",
  },
  {
    categoria: "Accesorios",
    nombre: "Correa de paseo - K9 Dog trainers",
    descripcion:
      "Correa de 3 mts de Paseo, Rastro, Adiestramiento Canino. Marca: K9 Dog trainers",
    presentacion: "unitario",
    precio: 1531,
    stock: 10,
    imagen: "https://i.postimg.cc/0Qw03hYz/correa.png",
  },
  {
    categoria: "Accesorios",
    nombre: "Comedero En Altura Para Perros Gatos Chico + Bowls De Acero",
    descripcion:
      "Comedero Bebedero Rustico de Madera + Bowls de Acero Inoxidable para Gatos o Perritos chiquitos",
    presentacion: "unitario",
    precio: 3200,
    stock: 2,
    imagen: "https://i.postimg.cc/GmXKsF3m/comedero.png",
  },
];
export default Productos;
