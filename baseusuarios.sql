-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-08-2021 a las 02:04:35
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `baseusuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'DESARROLLO DE HABILIDADES DE CATA DE CAFÉ', 'LA HABILIDAD SENSORIAL\r\n<p>\r\nPara empezar, la habilidad sensorial a la hora de catar no es algo que venga predeterminado en los genes o innato, si es verdad que algunas personas tienen mejor predisposición que otras, pero con entrenamiento y desarrollo esta demostrado que se puede llegar a ser un gran catador. ', 'Los sentidos del sabor y del olfato como tal, son sentidos cognitivos, es decir, los aprendemos según nuestras experiencias o vivencias, nadie sabe que sabor tiene una fresa o a que huele, hasta que no la huele y la prueba por primera vez, y después esta percepción del sabor de la fresa es individual de cada persona, a lo mejor yo no percibo el sabor de la fresa igual que otra persona.'),
(2, 'CONSERVAR EL CAFÉ, MITOS Y CÓMO HACERLO CORRECTAMENTE', 'Es la gran pregunta que nos hacemos cuando conocemos el dato de que el café se oxida muy rápido y pierde todas sus propiedades en un periodo corto de tiempo. Te dicen, ¿sabías que al moler el café si lo dejas al aire tal cual en 40 minutos ha perdido el 80% de su sabor y aroma? Y automáticamente piensas, ¡¡¿ostras y cómo puedo conservar el café una vez lo abra para que tenga el café fresco más tiempo?!!!', 'Existen muchos consejos y mitos de cómo debemos conservar nuestro café de mejor manera, pero en cambio a veces estos consejos perjudican más el café que lo conservan. El error más común suele ser que lo guardamos en la nevera en un envase no hermético y de la simple acción de abrir y cerrar la nevera para coger otros alimentos, el aire que hay dentro del recipiente del café condensa y crea humedad, otro gran enemigo del café, consiguiendo lo opuesto a lo que estamos buscando, conservar el café.'),
(4, 'XII CAMPEONATO NACIONAL DE BARISTAS', 'A PARTIR DEL DÍA 16 DE ABRIL HASTA EL DÍA 18 SE CELEBRA EL XXII CAMPEONATO NACIONAL DE BARISTAS ORGANIZADO POR EL FORUM CULTURAL DEL CAFÉ EN EL MARCO DE LA POPULAR FERIA DE HOSTELCO', 'Gracias al trabajo y esfuerzo de todo el equipo de Cafe Barsel, dos baristas integrantes de nuestro equipo han conseguido clasificar para esta gran final a nivel nacional.\r\n\r\nTanto Manuel Barragán subcampeón de la Comunidad Valenciana de GBM COFFEE&COCKTAIL CLUB, como Enrique Domenech campeon de la Región de Murcia de ATICO PUB en Ceutí, son dos de los dieciséis finalistas de este prestigioso campeonato, que se celebrara en Barcelona dentro del marco de la feria de Hostelco desde el día 16 de abril hasta el día 18. Por lo que todo el equipo de Café Barsel, con sus baristas, ya está trabajando a toda máquina para escoger los mejores cafés y realizar unos ejercicios espectaculares y muy profesionales en este campeonato.'),
(5, 'CAFEÍNA, ¿QUÉ ES EXACTAMENTE?', '¿Qué es en realidad la cafeína?\r\n\r\nPues bien a grandes rasgos y dicho a lo bruto, es un componente químico que algunas plantas usan como plaguicida natural.\r\n\r\nSi profundizamos un poco más. Es un alcaloide de sabor muy amargo que se encuentra en diferentes tipos de plantas, entre ellos nuestro preciado cafeto y que lo usan para sobrevivir básicamente.\r\n<p>\r\nEs una micro toxina que a seres vivos muy pequeños, como los insectos, les altera el sistema nervioso hasta el punto de matarlo, a nosotros también nos produce algún efecto en nuestro sistema nervioso, pero al tener más masa corporal es casi imperceptible, incluso en tomas controladas se ha demostrado que es beneficioso para la salud.<p>', '¿Sabías que una lata de un refresco de cola ronda casi los 100 miligramos de cafeína?\r\n\r\nPues visto así ya no es tanto, teniendo en cuenta que se considera que no es saludable ingerir más de 500 mligramos por día de cafeína, podemos hacernos unos cuantos cafés, pero eso sí, de calidad y de buenas variedades.\r\n\r\nCuando escogemos un café de la variedad robusta la cosa se complica ya que su contenido en cafeína ronda entre el 1,7% y el 4%, bastante más que el arábico. En un espresso de robusta correctamente extraído, nos encontramos con unos 85 miligramos, el tope está en quinientos pero recomendamos no exceder los trescientos miligramos, de aquí se obtiene la teoría de que más de tres cafés al día es malo, se presupone que los vas a tomar de mala calidad.'),
(6, 'CAFEÍNA, ¿QUÉ ES EXACTAMENTE?', '¿Qué es en realidad la cafeína?\r\n\r\nPues bien a grandes rasgos y dicho a lo bruto, es un componente químico que algunas plantas usan como plaguicida natural.\r\n\r\nSi profundizamos un poco más. Es un alcaloide de sabor muy amargo que se encuentra en diferentes tipos de plantas, entre ellos nuestro preciado cafeto y que lo usan para sobrevivir básicamente.\r\n<p>\r\nEs una micro toxina que a seres vivos muy pequeños, como los insectos, les altera el sistema nervioso hasta el punto de matarlo, a nosotros también nos produce algún efecto en nuestro sistema nervioso, pero al tener más masa corporal es casi imperceptible, incluso en tomas controladas se ha demostrado que es beneficioso para la salud.<p>', '¿Sabías que una lata de un refresco de cola ronda casi los 100 miligramos de cafeína?\r\n\r\nPues visto así ya no es tanto, teniendo en cuenta que se considera que no es saludable ingerir más de 500 mligramos por día de cafeína, podemos hacernos unos cuantos cafés, pero eso sí, de calidad y de buenas variedades.\r\n\r\nCuando escogemos un café de la variedad robusta la cosa se complica ya que su contenido en cafeína ronda entre el 1,7% y el 4%, bastante más que el arábico. En un espresso de robusta correctamente extraído, nos encontramos con unos 85 miligramos, el tope está en quinientos pero recomendamos no exceder los trescientos miligramos, de aquí se obtiene la teoría de que más de tres cafés al día es malo, se presupone que los vas a tomar de mala calidad.'),
(7, 'DESARROLLO DE HABILIDADES DE CATA DE CAFÉ', 'LA HABILIDAD SENSORIAL<p>Para empezar, la habilidad sensorial a la hora de catar no es algo que venga predeterminado en los genes o innato, si es verdad que algunas personas tienen mejor predisposición que otras, pero con entrenamiento y desarrollo esta demostrado que se puede llegar a ser un gran catador. ', 'Los sentidos del sabor y del olfato como tal, son sentidos cognitivos, es decir, los aprendemos según nuestras experiencias o vivencias, nadie sabe que sabor tiene una fresa o a que huele, hasta que no la huele y la prueba por primera vez, y después esta percepción del sabor de la fresa es individual de cada persona, a lo mejor yo no percibo el sabor de la fresa igual que otra persona.'),
(8, 'CONSERVAR EL CAFÉ, MITOS Y CÓMO HACERLO CORRECTAMENTE', 'Es la gran pregunta que nos hacemos cuando conocemos el dato de que el café se oxida muy rápido y pierde todas sus propiedades en un periodo corto de tiempo. Te dicen, !', '¿sabías que al moler el café si lo dejas al aire tal cual en 40 minutos ha perdido el 80% de su sabor y aroma? Y automáticamente piensas, ¡¡¿ostras y cómo puedo conservar el café una vez lo abra para que tenga el café fresco más tiempo?!!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablausuarios`
--

DROP TABLE IF EXISTS `tablausuarios`;
CREATE TABLE IF NOT EXISTS `tablausuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tablausuarios`
--

INSERT INTO `tablausuarios` (`id`, `usuario`, `password`) VALUES
(1, 'florbiro', 'b59c67bf196a4758191e42f76670ceba'),
(3, 'lorearce', '934b535800b1cba8f96a5d72f72f1611'),
(45, 'd', '8277e0910d750195b448797616e091ad');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
