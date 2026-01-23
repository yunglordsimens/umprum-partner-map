/**
 * UMPRUM PARTNER SCHOOLS DATABASE
 * ---------------------------------------------------------
 * This file contains the data for the interactive map.
 * * HOW TO ADD A NEW SCHOOL:
 * 1. Open the "generator.html" tool.
 * 2. Generate the code for the new school.
 * 3. Paste the generated line into the 'schools' list below 
 * (inside 'eu' or 'world' section).
 * 4. IMPORTANT: Make sure every line ends with a comma (,), 
 * except the last one in the list.
 */

window.mapData = {
    
    // =============================================================
    // SECTION 1: EUROPE
    // =============================================================
    eu: {

        image: "eu_map.PNG", 
        
        schools: [
            // AUSTRIA
            { name: "Universität für angewandte Kunst Wien, Vienna", url: "http://www.dieangewandte.at/", x: 49.30, y: 66.16 },
            
            // BELGIUM
            { name: "Royal Academy of Fine Arts, Antwerp", url: "http://www.ap.be/international", x: 34.22, y: 56.98 },
            { name: "KASK and Conservatorium School of Arts, Gent", url: "http://www.schoolofartsgent.be/", x: 32.76, y: 57.76 },
            { name: "LUCA School of Arts, Brussels", url: "https://luca-arts.be/", x: 33.71, y: 58.30 },
            { name: "École nationale supérieure des arts visuels de La Cambre, Brussels", url: "https://www.lacambre.be/en", x: 33.71, y: 58.30 },
            
            // CROATIA
            { name: "University of Zagreb, Zagreb", url: "http://www.unizg.hr/", x: 48.94, y: 72.80 },
            
            // DENMARK
            { name: "Royal Danish Academy of Fine Arts, Copenhagen", url: "http://www.kadk.dk/", x: 43.92, y: 45.41 },
            
            // ESTONIA
            { name: "Estonian Academy of Arts, Tallinn", url: "http://www.artun.ee/", x: 57.58, y: 34.42 },
            
            // FINLAND
            { name: "Aalto University, Helsinki", url: "http://www.aalto.fi/", x: 57.69, y: 31.98 },
            
            // FRANCE
            { name: "École supérieure d’art et de design d´Amiens", url: "https://esad-amiens.design/fr", x: 30.34, y: 60.30 },
            { name: "École Supérieure d´Arts et Médias de Caen/Cherbourg", url: "http://www.esam-2c.fr/", x: 26.79, y: 61.52 },
            { name: "École Supérieure d´Art et de Design Marseille", url: "http://www.esadmm.fr/", x: 33.35, y: 78.76 },
            { name: "Haute école des arts du Rhin, Strasbourg", url: "http://www.hear.fr/", x: 37.15, y: 64.65 },
            { name: "École Nationale Supérieure des Arts Décoratifs, Paris", url: "http://www.ensad.fr/", x: 30.78, y: 63.81 },
            { name: "École Duperré Paris", url: "https://duperre.org/", x: 30.78, y: 63.81 },
            { name: "École nationale supérieure d'art et de design de Nancy", url: "https://ensad-nancy.eu/", x: 34.96, y: 64.21 },
            
            // GERMANY
            { name: "Universität der Künste Berlin", url: "http://www.udk-berlin.de/", x: 44.83, y: 54.20 },
            { name: "Kunsthochschule Berlin-Weissensee", url: "http://www.kh-berlin.de/", x: 44.83, y: 54.20 },
            { name: "Fachhochschule Bielefeld", url: "https://www.fh-bielefeld.de/", x: 39.17, y: 54.54 },
            { name: "Hochschule für Grafik und Buchkunst Leipzig", url: "https://www.hgb-leipzig.de/", x: 43.48, y: 57.67 },
            { name: "Technische Universität Dortmund", url: "https://www.tu-dortmund.de/", x: 37.63, y: 56.25 },
            { name: "Hochschule für Kunst und Design Halle", url: "http://www.burg-halle.de/", x: 42.46, y: 57.13 },
            { name: "Hochschule für Gestaltung Schwäbisch Gmünd", url: "https://www.hfg-gmuend.de/en/", x: 40.08, y: 63.67 },
            
            // GREECE
            { name: "Athens School of Fine Arts", url: "http://www.asfa.gr/", x: 59.77, y: 89.75 },
            
            // HUNGARY
            { name: "Moholy-Nagy University of Art and Design, Budapest", url: "http://www.mome.hu/", x: 52.75, y: 68.12 },
            
            // IRELAND
            { name: "The National College of Art and Design, Dublin", url: "http://www.ncad.ie/", x: 20.86, y: 47.07 },
            
            // ICELAND
            { name: "Iceland University of the Arts, Reykjavík", url: "http://www.lhi.is/", x: 15.23, y: 11.72 },
            
            // ITALY
            { name: "Politecnico di Milano", url: "http://www.polimi.it/", x: 39.02, y: 73.49 },
            { name: "Universita degli Studi Roma Tre", url: "http://www.uniroma3.it/", x: 43.34, y: 83.35 },
            { name: "Accademia di Belle Arti di Bologna", url: "http://www.ababo.it/", x: 42.17, y: 75.83 },
            
            // LITHUANIA
            { name: "Vilnius Academy of Arts", url: "http://www.vda.lt/", x: 59.00, y: 46.63 },
            
            // NORWAY
            { name: "Oslo National Academy of the Arts", url: "http://www.khio.nl/", x: 42.53, y: 34.52 },
            
            // POLAND
            { name: "Akademia Sztuk Pieknych w Krakowie", url: "http://www.asp.krakow.pl/", x: 54.03, y: 59.72 },
            { name: "Strzeminski Academy of Fine Arts in Łódź", url: "https://int.asp.lodz.pl/", x: 53.04, y: 56.40 },
            
            // SLOVAKIA
            { name: "Vysoká škola výtvarných umení, Bratislava", url: "http://www.vsvu.sk/", x: 50.15, y: 65.62 },
            
            // SLOVENIA
            { name: "University of Ljubljana", url: "http://www.aluo.uni-lj.si/", x: 46.41, y: 72.31 },
            
            // SPAIN
            { name: "ELISAVA Escola Superior de Disseny Barcelona", url: "http://www.elisava.net/", x: 27.09, y: 82.52 },
            { name: "Universidad Politécnica de Valencia", url: "http://www.hdk.gu.se/", x: 22.14, y: 86.87 },
            
            // SWEDEN
            { name: "Göteborgs Universitet, School of Design and Crafts", url: "http://www.hdk.gu.se/", x: 44.47, y: 40.28 },
            { name: "Kungliga Tekniska Hogskolan Stockholm", url: "http://www.arch.kth.se/", x: 50.47, y: 35.10 },
            { name: "Konstfack University College, Stockholm", url: "http://www.konstfakc.se/", x: 50.47, y: 35.10 },
            { name: "Umeå University, School of Architecture", url: "http://www.umu.se/", x: 51.28, y: 23.93 },
            
            // NETHERLANDS
            { name: "Willem de Kooning Academy, Rotterdam", url: "http://www.hro.nl/", x: 34.59, y: 55.86 },
            { name: "HKU University of the Arts Utrecht", url: "http://www.studentportal.hku.nl/", x: 35.61, y: 54.25 },
            { name: "Royal Academy of Art, Hague", url: "http://www.kabk.nl/", x: 33.82, y: 54.49 },
            { name: "Gerrit Rietveld Academie, Amsterdam", url: "http://www.gerritrietveldacademie.nl/", x: 34.44, y: 53.52 },
            
            // SWITZERLAND
            { name: "HEAD-GE, Geneve", url: "http://www.hes.so.ch/", x: 34.66, y: 70.65 },
            { name: "Zürcher Hochschule der Künste, Zürich", url: "http://www.zhdk.ch/", x: 38.29, y: 68.36 },
            
            // UK
            { name: "University of the West of England, Bristol", url: "http://www.uwe.ac.uk/", x: 25.11, y: 53.52 },
            { name: "Edinburgh College of Art", url: "http://www.eca.ac.uk/", x: 26.06, y: 41.36 },
            { name: "Glasgow School of Art", url: "http://www.gsa.ac.uk/", x: 25.11, y: 41.65 },
            { name: "Kingston University, London", url: "http://www.kingston.ac.uk/", x: 28.44, y: 54.79 },
            { name: "Sheffield Hallam University", url: "http://www.shu.ac.uk/", x: 27.05, y: 49.51 }
        ]
    },

    // =============================================================
    // SECTION 2: WORLD
    // =============================================================
    world: {

        image: "wrld_map.PNG", 
        
        schools: [
            // ISRAEL
            { name: "Bezalel Academy of Arts and Design Jerusalem", url: "http://www.bezalel.ac.il/", x: 59.96, y: 45.51 },
            
            // CANADA
            { name: "Emily Carr Institute of Art and Design, Vancouver", url: "http://www.ecuad.bc.ca/", x: 15.63, y: 35.30 },
            
            // COLOMBIA
            { name: "Universidad Nacional de Colombia, Bogotá", url: "http://www.unal.edu.co/", x: 28.04, y: 56.88 },
            
            // JAPAN
            { name: "Kyoto University of Art and Design", url: "http://www.kyoto-art.ac.jp/", x: 88.65, y: 43.31 },
            { name: "Bunka Gakuen Educational Foundation, Tokyo", url: "http://www.bjgu-bunka.ac.jp/", x: 89.97, y: 43.41 },
            { name: "University of Toyama, School of Art and Design", url: "http://www.u-toyama.ac.jp/", x: 89.09, y: 42.63 },
            { name: "Toyama City Institute of Glass Art", url: "http://www.toyamaglass.ac.jp/", x: 89.09, y: 42.63 },
            
            // SOUTH KOREA
            { name: "Chungnam National University, Daejeon", url: "http://www.cnu.ac.kr/", x: 86.35, y: 43.12 },
            
            // NEW ZEALAND
            { name: "Dunedin School of Art, Otago", url: "http://www.otagopolytechnic.ac.nz/", x: 97.00, y: 81.79 },
            
            // TAIWAN
            { name: "National Taiwan University of Arts, Taipei", url: "http://www.ntua.edu.tw/", x: 85.18, y: 48.93 },
            
            // USA
            { name: "School of Visual Arts, New York", url: "http://www.sva.edu/", x: 28.95, y: 39.75 },
            { name: "Rhode Island School of Design, Providence", url: "http://www.risd.edu/", x: 29.69, y: 39.06 },
            
            // PERU
            { name: "Pontificia Universidad Católica del Perú, Lima", url: "http://www.pucp.edu.pe/", x: 27.23, y: 64.75 }
        ]
    }
};