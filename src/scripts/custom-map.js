function init(){
    let customMap = new ymaps.Map("main-custom-map", {
        center: [56.180703702866744,55.492411334417106],
        zoom: 5
    });
    
    customMap.controls.remove('geolocationControl'); // удаляем геолокацию
    customMap.controls.remove('searchControl'); // удаляем поиск
    customMap.controls.remove('trafficControl'); // удаляем контроль трафика
    customMap.controls.remove('typeSelector'); // удаляем тип
    customMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    customMap.controls.remove('rulerControl'); // удаляем контрол правил

    let myGeoObjects = [];

    for (var i = 0; i<apartmentsList.length; i++) {
        myGeoObjects[i] = new ymaps.GeoObject({
            geometry: {
            type: "Point",
            coordinates: apartmentsList[i].coords
            },
            properties: {
                clusterCaption: `${apartmentsList[i].address}`,           
                balloonContentHeader: `<h4 class="map-block-baloon-title">${apartmentsList[i].address}</h4>`,
                balloonContentBody:
                  `
                    <div class="map-block-baloon-content" style="background-image: url('${apartmentsList[i].photo}')">
                        <a href="tel:${apartmentsList[i].phone}" class="map-block-baloon-phone"></a>
                    </div>
                  `,
                balloonContentFooter: (() => {
                    let list = '<ul class="map-block-baloon-tags">'
                    apartmentsList[i].tags.forEach((item) => {
                        list += '<li class="map-block-baloon-tag">'+item+'</li>';
                    })
                    list += '</ul>'

                    return list;
                })(),
                // Зададим содержимое всплывающей подсказки.
                hintContent: `${apartmentsList[i].address}`,
                iconCaption: `${apartmentsList[i].address}`
            }
        });
    }

    let myClusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'images/count-icon.webp',
                size: [32, 32],
                offset: [-15, 6]
            },
            {
                href: 'images/count-icon.webp',
                size: [38, 38],
                offset: [-17, 4]
            },
            {
                href: 'images/count-icon.webp',
                size: [46, 46],
                offset: [-20, 4]
            }],
        clusterNumbers: [5,10],
    });
    myClusterer.add(myGeoObjects);
    customMap.geoObjects.add(myClusterer);
}


ymaps.ready(init);