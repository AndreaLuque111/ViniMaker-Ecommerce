
import { Fragment } from "react";

// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

function Dashboard() {
  return (

    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
      
      {/* Section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        {/* Card 1 */}
        <article className="bg-slate-900 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
          <RiLineChartLine className="text-5xl" />
          <h4 className="text-2xl">Ganancias</h4>
          <span className="text-5xl text-white"> $8,350 USD</span>
          <span className="py-1 px-3 bg-slate-800 rounded-full">
            +20% desde el mes pasado
          </span>
        </article>
        {/* Card 2 */}
        <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
          <article className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
            <span className="bg-slate-900 text-gray-300 text-2xl font-bold p-4 rounded-xl">
              10
            </span>
            <div>
              <h3 className="font-bold">Ranking de tiendas de arte en el país</h3>
              <p className="text-gray-500">¡En el top 10 este mes!</p>
            </div>
          </article>
          <darticle className="bg-primary-100/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-slate-900 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                3
              </span>
              <div>
                <h3 className="font-bold">#3 en lugares más visitados por galerias de arte</h3>

              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                Arte
              </span>
              <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                Música
              </span>
            </div>
          </darticle>
        </div>
        {/* Card 3 */}
        <article className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">Vinilos musicales más recomendados</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ONADRRELCJFE3AZURQP2U4T3JQ.jpg"
                className="w-14 h-14 object-cover rounded-full"
              />
              <>
                <h3 className="font-bold">Vinilo The beatles-Album-Please Please Me </h3>
                <p className="text-gray-500">¡100 Vendidos en esta semana!</p>
              </>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Villains_cover_artwork.png/220px-Villains_cover_artwork.png"
                className="w-14 h-14 object-cover rounded-full"
              />
              <>
                <h3 className="font-bold">Queens of the Stone Age-Album-Villains</h3>
                <p className="text-gray-500">¡50 vendidos en esta semana!</p>
              </>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="hover:text-primary-100 transition-colors hover:underline"
              >
                Mira más recomendaciones
              </a>
            </div>
          </div>
        </article>
      </section>
      {/* Section 2 */}
      <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <article>
          <h1 className="text-2xl font-bold mb-8">Vinilos pintados a mano subastados este mes</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            {/* Card 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="https://i.pinimg.com/564x/a0/ba/55/a0ba553a6e47d5c7efac2a4467de31ef.jpg"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Vinilo explosión</h3>
                  <p className="text-gray-500">Hecho por el artista John Sanchez </p>
                </div>
              </div>
              <>
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                  Paid
                </span>
              </>
              <>
                <span className="font-bold"> $630 USD</span>
              </>
            </div>
            {/* Card 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src="https://img.freepik.com/fotos-premium/disco-vinilo-arco-iris-color-ilustracion-musical-creativa-aislada-sobre-fondo-blanco_305419-2126.jpg?w=740"
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-bold">Vinilo cacahuate</h3>
                  <p className="text-gray-500">Hecho por Carla Triana</p>
                </div>
              </div>
              <>
                <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                  Paid
                </span>
              </>
              <>
                <span className="font-bold">$900USD</span>
              </>
            </div>
          </div>
          <div className="bg-slate-900  text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
            <>
              <RiHashtag className="text-4xl -rotate-12" />
            </>
            <div>
              <h5 className="font-bold text-white">Conoce más de los artistas de ViniMaker en nuestro canal de Discord</h5>

            </div>
            <div className="w-full xl:w-auto">
              <button className="bg-slate-700 py-2 px-6 rounded-xl text-white w-full">
                Únete ahora
              </button>
            </div>
          </div>
        </article>
        <article>
          <h1 className="text-2xl font-bold mb-8">Ártista del mes en ViniMaker</h1>
          <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/mujer-joven-camisa-pantalones-cortos-sosteniendo-pincel-paleta-mirando-divertido_176474-12443.jpg?w=740&t=st=1685684060~exp=1685684660~hmac=c2273f8d9313a3717938544defad47dfd64bf0a0e37e68b2ee23795cda244902"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Beatriz Betancourth</h3>
                  <p className="text-gray-500">Actualizado hace un día</p>
                </div>
              </div>
              <>
                <span className="bg-slate-800 py-2 px-4 rounded-full text-white">
                  Diseñadora gráfica
                </span>
              </>
            </div>
            <>
              <h5 className="text-lg font-bold">
                Apasionada por el arte y la pintura
              </h5>
              <p className="text-gray-500">
                Beatriz es una de las artistas de ViniMaker más destacadas de nuestro equipo, se considera una mujer libre que expresa su emociones a través de sus pinturas.
              </p>
            </>
            <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-lg">
              <>
                <p className="text-sm text-gray-500"> Su lugar favorito es el Jardín Botánico de Bogotá, allí se inspira en los colores de la naturaleza, los sonidos y los olores para hacer sus pinturas únicas.</p>
              </>
              <>
                <span className="border border-primary-100 text-primary-100 py-2 px-4 rounded-full">
                  Pinturas
                </span>
              </>
            </div>
          </div>
        </article>
      </section>
    </main>

  );
}

export default Dashboard;
