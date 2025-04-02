import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('presentacion');
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* Banner superior */}
        <img 
          src="/public/img/banner.jpg" 
          width="100%" 
          height="300" 
          style={{ display: 'block', margin: '0 auto', objectFit: 'cover' }} 
          alt="Banner principal" 
        />
        
        {/* Menú de navegación */}
        <nav style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '10px 0', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          position: 'relative'
        }}>
          <ul style={{ 
            listStyleType: 'none', 
            display: 'flex', 
            justifyContent: 'space-around', 
            margin: 0, 
            padding: 0,
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Presentación */}
            <li style={{ position: 'relative' }}>
              <a 
                href="#presentacion" 
                onClick={() => setActiveSection('presentacion')}
                style={{ 
                  textDecoration: 'none', 
                  color: '#333', 
                  padding: '10px 15px', 
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  display: 'block'
                }}
              >
                Presentación
              </a>
              <ul style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '0 0 5px 5px',
                padding: '5px 0',
                minWidth: '150px',
                zIndex: '1000',
                margin: 0,
                listStyleType: 'none'
              }}>
                <li>
                  <a 
                    href="#ejemplo1" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 1
                  </a>
                </li>
                <li>
                  <a 
                    href="#ejemplo2" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Pasteles */}
            <li style={{ position: 'relative' }}>
              <a 
                href="#pasteles" 
                onClick={() => setActiveSection('pasteles')}
                style={{ 
                  textDecoration: 'none', 
                  color: '#333', 
                  padding: '10px 15px', 
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  display: 'block'
                }}
              >
                Pasteles
              </a>
              <ul style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '0 0 5px 5px',
                padding: '5px 0',
                minWidth: '150px',
                zIndex: '1000',
                margin: 0,
                listStyleType: 'none'
              }}>
                <li>
                  <a 
                    href="#ejemplo1" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 1
                  </a>
                </li>
                <li>
                  <a 
                    href="#ejemplo2" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Pedidos Exclusivos */}
            <li style={{ position: 'relative' }}>
              <a 
                href="#pedidos-exclusivos" 
                onClick={() => setActiveSection('pedidos-exclusivos')}
                style={{ 
                  textDecoration: 'none', 
                  color: '#333', 
                  padding: '10px 15px', 
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  display: 'block'
                }}
              >
                Pedidos Exclusivos
              </a>
              <ul style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '0 0 5px 5px',
                padding: '5px 0',
                minWidth: '150px',
                zIndex: '1000',
                margin: 0,
                listStyleType: 'none'
              }}>
                <li>
                  <a 
                    href="#ejemplo1" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 1
                  </a>
                </li>
                <li>
                  <a 
                    href="#ejemplo2" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Local */}
            <li style={{ position: 'relative' }}>
              <a 
                href="#local" 
                onClick={() => setActiveSection('local')}
                style={{ 
                  textDecoration: 'none', 
                  color: '#333', 
                  padding: '10px 15px', 
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  display: 'block'
                }}
              >
                Local
              </a>
              <ul style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '0 0 5px 5px',
                padding: '5px 0',
                minWidth: '150px',
                zIndex: '1000',
                margin: 0,
                listStyleType: 'none'
              }}>
                <li>
                  <a 
                    href="#ejemplo1" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 1
                  </a>
                </li>
                <li>
                  <a 
                    href="#ejemplo2" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Contáctanos */}
            <li style={{ position: 'relative' }}>
              <a 
                href="#contactanos" 
                onClick={() => setActiveSection('contactanos')}
                style={{ 
                  textDecoration: 'none', 
                  color: '#333', 
                  padding: '10px 15px', 
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  display: 'block'
                }}
              >
                Contáctanos
              </a>
              <ul style={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#fff',
                boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                borderRadius: '0 0 5px 5px',
                padding: '5px 0',
                minWidth: '150px',
                zIndex: '1000',
                margin: 0,
                listStyleType: 'none'
              }}>
                <li>
                  <a 
                    href="#ejemplo1" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 1
                  </a>
                </li>
                <li>
                  <a 
                    href="#ejemplo2" 
                    style={{ 
                      textDecoration: 'none', 
                      color: '#555', 
                      padding: '8px 15px', 
                      transition: 'all 0.3s',
                      display: 'block'
                    }}
                  >
                    Ejemplo 2
                  </a>
                </li>
              </ul>
            </li>

            {/* Registrarse (sin submenú) */}
            <li>
              <a 
                href="#registrarse" 
                style={{ 
                  textDecoration: 'none', 
                  color: '#333', 
                  padding: '10px 15px', 
                  transition: 'all 0.3s',
                  fontWeight: '500',
                  display: 'block'
                }}
                data-bs-toggle="modal" 
                data-bs-target="#registerModal"
              >
                Registrarse
              </a>
            </li>

            {/* CSS para el efecto hover */}
            <style>
            {`
              nav li:hover > a {
                background-color: #f6d1de !important;
                color: #000 !important;
              }
              
              nav li:hover > ul {
                display: block !important;
              }
              
              nav li ul li a:hover {
                background-color: #f0f0f0;
                color: #000 !important;
              }
            `}
            </style>
          </ul>
        </nav>
      </div>

      <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="registerModalLabel">Regístrate</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Regístrate</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section id="presentacion">
        <h2 style={{ textAlign: 'center' }}>Presentación</h2>
        <hr />
        <div>
          <img src="/public/img/logo_pasteleria.jpg"  width="100" height="100" style={{ display: 'block', margin: '0 auto' }} />
          <br />
          Hola, esperemos que estes bien, y que en este dia tan especial disfrutes de un gran pastel; es por eso que aqui en Pasteleria dulces angeles, te ofrecemos deliciosos pasteles, pero antes de ellos, nos presentamos

          <hr />
          <h3>Bienvenidos a Dulces Angeles</h3>
          <p>En Pasteleria Dulces Angeles, entendemos que cada momento especial merece ser celebrado con un toque dulce y delicioso. Desde nuestro primer día, hemos dedicado nuestra pasión y creatividad a elaborar los mejores pasteles, postres y repostería, utilizando siempre ingredientes frescos, de alta calidad y una buena dosis de amor.</p>
          <img src="/public/img/banner historia.jpg"  width="80%" height="300" style={{ display: 'block', margin: '0 auto' }} />
          <h4>Nuestra Historia</h4>
          <p>Nuestra aventura comenzó con el sueño de crear un espacio donde el arte y la repostería se fusionaran para alegrar el corazón de quienes nos visitan. Inspirados por las recetas familiares y las tradiciones culinarias, hemos llevado la pastelería a otro nivel, combinando técnicas clásicas con un toque moderno y creativo.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
            <img src="/public/img/historia1.jpg" width="300" height="325" style={{ display: 'block' }} />
            <img src="/public/img/historia2.jpg" width="300" height="325" style={{ display: 'block' }} />
          </div>

          <h4>Lo que Ofrecemos</h4>
          <ul>
            <li><strong>Pasteles Personalizados:</strong> Creamos obras maestras únicas para cumpleaños, bodas, aniversarios y todo tipo de celebraciones. Nuestros pasteles no solo son hermosos, ¡también son irresistiblemente deliciosos!</li>
            <li><strong>Repostería Artesanal:</strong> Desde croissants esponjosos hasta muffins llenos de sabor, encontrarás una amplia variedad de opciones para satisfacer cualquier antojo.</li>
            <li><strong>Postres Gourmet:</strong> Descubre la magia de nuestras tartas, cheesecakes y petit fours, elaborados con recetas exclusivas para deleitar tu paladar.</li>
            <li><strong>Opciones Saludables:</strong> También ofrecemos opciones veganas, sin gluten y sin azúcar añadido, para que todos puedan disfrutar de nuestros productos sin preocupaciones.</li>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '100px' }}>
              <img src="/public/img/local1.jpg" width="300" height="300" style={{ display: 'block' }} />
            </div>
          </ul>
          <h4>Nuestra Filosofía</h4>
          <p>En Pasteleria Dulces Angeles, creemos que la repostería va más allá de un simple postre; es una forma de compartir momentos inolvidables. Por eso, nos esforzamos por crear sabores que evoquen recuerdos felices y creen nuevas experiencias. Cada creación es elaborada con cuidado y dedicación, porque sabemos que mereces lo mejor.</p>
          <h4>Nuestros Servicios</h4>
          <ul>
            <li>Servicio de <strong>pedidos especiales</strong>: Cuéntanos tu idea y la convertiremos en realidad.</li>
            <li>Envío a domicilio: Tus delicias favoritas, directamente a tu puerta.</li>
            <li>Experiencias de taller: Aprende a decorar tu propio pastel o crear postres desde cero con nuestros expertos.</li>
          </ul>
          <p>En Dulces Angeles, estamos aquí para hacer que cada momento sea único y delicioso. ¡Te esperamos con los brazos abiertos y un pastel recién horneado!</p>
        </div>
      </section>

      <section id="pasteles">
        <h2 style={{ textAlign: 'center' }}>Pasteles</h2>
        <div>
          <hr />
          <h3 style={{ textAlign: 'center' }}>Repostería Artesanal</h3>
          <hr />
          <ol>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <strong>Croissant de almendra y miel</strong><br />
                Un croissant esponjoso y dorado, horneado a la perfección, relleno de una cremosa mezcla de almendras y un toque dulce de miel. Perfecto para acompañar una taza de café o té.<br />
                <strong>Ingredientes:</strong><br />
                - Harina de trigo<br />
                - Mantequilla de alta calidad<br />
                - Levadura fresca<br />
                - Azúcar<br />
                - Leche<br />
                - Crema de almendra<br />
                - Miel<br />
              </div>
              <img src="/public/img/Croissant_de_almendra _y_miel.jpeg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
            </li>
            <hr />
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/public/img/MUFFINS-DE-ARANDANOS-Y-LIMON.jpg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <strong>Muffin de arándanos y limón</strong><br />
                Suaves muffins con un equilibrio perfecto entre la dulzura de los arándanos frescos y un toque cítrico de limón. Ideales para el desayuno o un snack.<br />
                <strong>Ingredientes:</strong><br />
                - Harina de trigo<br />
                - Polvo para hornear<br />
                - Azúcar<br />
                - Mantequilla derretida<br />
                - Huevos<br />
                - Yogur natural<br />
                - Arándanos frescos<br />
                - Ralladura de limón<br />
              </div>
            </li>
            <hr />
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <strong>Panqué de nuez y canela</strong><br />
                Un clásico de sabor reconfortante, con un toque aromático de canela y crujientes nueces en cada mordida.<br />
                <strong>Ingredientes:</strong><br />
                - Harina de trigo<br />
                - Canela en polvo<br />
                - Azúcar mascabado<br />
                - Mantequilla<br />
                - Huevos<br />
                - Leche<br />
                - Nueces picadas<br />
              </div>
              <img src="/public/img/Panqué_de_nuez_y_canela.png"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
              <hr />
            </li>
          </ol>
          <hr />
          <h3 style={{ textAlign: 'center' }}>Postres Gourmet</h3>
          <hr />
          <ol>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/public/img/Tarta_de_frutas_frescas.jpeg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <strong>Tarta de frutas frescas</strong><br />
                Una combinación fresca y colorida de frutas de temporada sobre una base crujiente y una suave capa de crema pastelera. Perfecta para cualquier ocasión especial.<br />
                <strong>Ingredientes:</strong><br />
                - Harina para la base (crust)<br />
                - Mantequilla<br />
                - Azúcar glas<br />
                - Crema pastelera (hecha con leche, huevos, azúcar y vainilla)<br />
                - Frutas frescas de temporada (fresas, kiwis, arándanos, etc.)<br />
              </div>
            </li>
            <hr />
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <strong>Cheesecake de maracuyá</strong><br />
                Cremoso y suave, con un toque tropical gracias a una cobertura de puré de maracuyá, que equilibra lo dulce y lo ácido.<br />
                <strong>Ingredientes:</strong><br />
                - Queso crema<br />
                - Azúcar<br />
                - Base de galletas trituradas y mantequilla<br />
                - Huevos<br />
                - Maracuyá fresco para el puré<br />
                - Gelatina sin sabor<br />
              </div>
              <img src="/public/img/Cheesecake_de_maracuyá.jpeg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
            </li>
            <hr />
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/public/img/Petit_fours_de_chocolate_oscuro.jpeg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <strong>Petit fours de chocolate oscuro</strong><br />
                Elegantes y pequeños bocados hechos con chocolate de alta calidad, rellenos de ganache y decorados con estilo.<br />
                <strong>Ingredientes:</strong><br />
                - Chocolate amargo<br />
                - Ganache (crema de leche y chocolate)<br />
                - Harina<br />
                - Azúcar<br />
                - Huevos<br />
                - Decoración (hojas de oro o frutas secas)<br />
              </div>
            </li>
          </ol>
          <hr />
          <h3 style={{ textAlign: 'center' }}>Opciones Saludables</h3>
          <hr />
          <ol>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <strong>Brownie vegano de aguacate</strong><br />
                Un postre saludable y denso, donde el aguacate sustituye la mantequilla, ofreciendo una textura rica y un sabor intenso de cacao.<br />
                <strong>Ingredientes:</strong><br />
                - Pulpa de aguacate<br />
                - Cacao en polvo<br />
                - Dátiles (para endulzar)<br />
                - Harina de avena<br />
                - Aceite de coco<br />
                - Extracto de vainilla<br />
                - Polvo para hornear<br />
              </div>
              <img src="/public/img/brownie-de-aguacate-cortado.jpg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
            </li>
            <hr />
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/public/img/Muffin_de_avena_y_plátano sin_azúcar_añadido.jpg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
              <div style={{ flex: 1 }}>
                <strong>Muffin de avena y plátano sin azúcar añadido</strong><br />
                Muffins suaves y naturalmente dulces gracias al plátano maduro, ideales para un desayuno saludable o un snack.<br />
                <strong>Ingredientes:</strong><br />
                - Harina de avena<br />
                - Puré de plátano maduro<br />
                - Canela en polvo<br />
                - Huevos (o sustituto de huevo vegano)<br />
                - Leche de almendra<br />
                - Polvo para hornear<br />
                - Extracto de vainilla<br />
              </div>
            </li>
            <hr />
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <strong>Barra energética sin gluten de frutos secos</strong><br />
                Un snack nutritivo lleno de energía, con una mezcla de frutos secos y semillas que aporta textura y sabor.<br />
                <strong>Ingredientes:</strong><br />
                - Almendras picadas<br />
                - Nueces<br />
                - Semillas de chía<br />
                - Pasas o arándanos deshidratados<br />
                - Miel (o jarabe de agave para una versión vegana)<br />
                - Mantequilla de almendra (o de maní sin azúcar)<br />
              </div>
              <img src="/public/img/Croissant_de_almendra _y_miel.jpeg"  style={{ width: '400px', height: '400px', marginLeft: '20px', marginRight: '20px' }} />
            </li>
          </ol>
        </div>
      </section>
      <section id="pedidos-exclusivos">
        <h2 style={{ textAlign: 'center' }}>Pedidos Exclusivos</h2>
        <hr />
        <div>
          <h3>Opciones de Personalización para un Pastel</h3>
          <ol>
            <li><strong>Diseño Temático:</strong>
              <ul>
                <li>Basado en hobbies, como deportes, música o cine.</li>
                <li>Inspirado en personajes favoritos de películas, series o videojuegos.</li>
                <li>Estilos elegantes con flores y detalles geométricos.</li>
              </ul>
            </li>
            <li><strong>Sabores Únicos:</strong>
              <ul>
                <li>Combina sabores como chocolate con maracuyá o vainilla con pistache.</li>
                <li>Opciones de relleno especiales: ganache, frutas frescas, crema de queso, dulce de leche, entre otros.</li>
              </ul>
            </li>
            <li><strong>Técnicas Decorativas:</strong>
              <ul>
                <li><strong>Fondant:</strong> Modelado de figuras y decoraciones en 3D.</li>
                <li><strong>Buttercream:</strong> Texturas suaves, degradados de colores y diseños florales.</li>
                <li><strong>Glass Icing:</strong> Acabados brillantes tipo espejo.</li>
              </ul>
            </li>
            <li><strong>Mensajes Especiales:</strong>
              <ul>
                <li>Frases escritas con glaseado o azúcar impresa.</li>
                <li>Incorporación de nombres, fechas y dedicatorias personales.</li>
              </ul>
            </li>
            <li><strong>Formas Originales:</strong>
              <ul>
                <li>Formas geométricas no convencionales (hexágonos, corazones, estrellas).</li>
                <li>Pasteles escalonados (de varios niveles) para eventos grandes.</li>
                <li>Modelado de objetos o escenas completas.</li>
              </ul>
            </li>
            <li><strong>Colores Personalizados:</strong>
              <ul>
                <li>Uso de paletas de colores específicas para eventos (pasteles en tonos pastel, metálicos o colores vibrantes).</li>
                <li>Decoración con degradados o efectos ombré.</li>
              </ul>
            </li>
            <li><strong>Decoraciones Comestibles:</strong>
              <ul>
                <li>Figuras hechas de chocolate, frutas, macarons, caramelos o flores comestibles.</li>
                <li>Elementos decorativos creados con técnicas de impresión comestible.</li>
              </ul>
            </li>
            <li><strong>Estilos Dietéticos:</strong>
              <ul>
                <li>Ingredientes veganos, sin gluten, bajos en azúcar, o adaptados a alergias alimentarias.</li>
                <li>Opciones saludables sin perder el sabor ni la creatividad.</li>
              </ul>
            </li>
          </ol>
        </div>
      </section>
      <section id="local">
        <h2 style={{ textAlign: 'center' }}>Local</h2>
        <hr />
          <div>
          Visítanos<br />
          Estamos ubicados en Boulevard Belisario Domenguez 1081, 29020 Tuxtla Gutierrez, Chiapas, un lugar acogedor donde puedes disfrutar de un buen café acompañado de tus dulces favoritos. Nuestro equipo estará encantado de recibirte y hacer de tu visita una experiencia inolvidable.
          <img src="/public/img/local.jpg"  width="500" height="500" style={{ display: 'block', margin: '0 auto' }} />
          <br />
          </div>
      </section>
      <section id="contactanos">
        <h2 style={{ textAlign: 'center' }}>Contáctanos</h2>
        <hr />
        <div>
          Síguenos en nuestras redes sociales para mantenerte al día con nuestras últimas creaciones, promociones y mas. Encuéntranos como Dulce Angel.
        <footer>
        <strong>X (Twitter)</strong>: <a href="https://x.com/PasteleriaDulceAngel">https://x.com/PasteleriaDulceAngel</a> <br />
        <strong>Facebook</strong>: <a href="https://facebook.com/PasteleriaDulceAngel">https://facebook.com/PasteleriaDulceAngel</a> <br />
        <strong>Instagram</strong>: <a href="https://instagram.com/PasteleriaDulceAngel">https://instagram.com/PasteleriaDulceAngel</a>
      </footer>
        </div>
      </section>
      <button onClick={() => window.scrollTo(0, 0)} className="button-scroll-to-top" style={{ position: 'fixed', right: '20px', bottom: '20px' }}>
        ↑
      </button>
    </>
  );
}

export default App;
