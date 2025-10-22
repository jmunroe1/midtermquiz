const glacierData = [
    {
        name: "Agassiz Glacier",
        lat: 48.9326,
        lon: -114.1586,
        area_1966: 1.6006,  // km²
        area_1998: 1.1745,  // km²
        area_2005: 1.0396,  // km²
        area_2015: 0.7367,  // km²
        percentLoss_1966_2015: 83,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Ahern Glacier",
        lat: 48.8435,
        lon: -113.7845,
        area_1966: 0.5892,  // km²
        area_1998: 0.5167,  // km²
        area_2005: 0.5119,  // km²
        area_2015: 0.5116,  // km²
        percentLoss_1966_2015: 13,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Baby Glacier",
        lat: 48.9054,
        lon: -114.1541,
        area_1966: 0.1172,  // km²
        area_1998: 0.0809,  // km²
        area_2005: 0.0760,  // km²
        area_2015: 0.0756,  // km²
        percentLoss_1966_2015: 44,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Blackfoot Glacier",
        lat: 48.5938,
        lon: -113.6669,
        area_1966: 1.8325,  // km²
        area_1998: 1.6251,  // km²
        area_2005: 1.6302,  // km²
        area_2015: 1.4985,  // km²
        percentLoss_1966_2015: 70,
        nearestEntrance: "Saint Mary's"
    },
    {
        name: "Boulder Glacier",
        lat: 48.9577,
        lon: -114.0877,
        area_1966: 0.2310,  // km²
        area_1998: 0.0488,  // km²
        area_2005: 0.0458,  // km²
        area_2015: 0.0353,  // km²
        percentLoss_1966_2015: 96,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Carter Glacier",
        lat: 48.8897,
        lon: -114.0496,
        area_1966: 0.3557,  // km²
        area_1998: 0.2690,  // km²
        area_2005: 0.2344,  // km²
        area_2015: 0.2248,  // km²
        percentLoss_1966_2015: 68,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Chaney Glacier",
        lat: 48.8520,
        lon: -113.8317,
        area_1966: 0.5638,  // km²
        area_1998: 0.4304,  // km²
        area_2005: 0.3597,  // km²
        area_2015: 0.3345,  // km²
        percentLoss_1966_2015: 69,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Dixon Glacier",
        lat: 48.9280,
        lon: -114.0160,
        area_1966: 0.2911,  // km²
        area_1998: 0.1670,  // km²
        area_2005: 0.1627,  // km²
        area_2015: 0.1258,  // km²
        percentLoss_1966_2015: 81,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Gem Glacier",
        lat: 48.7463,
        lon: -113.7283,
        area_1966: 0.0291,  // km²
        area_1998: 0.0238,  // km²
        area_2005: 0.0235,  // km²
        area_2015: 0.0222,  // km²
        percentLoss_1966_2015: 9,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Grinnell Glacier",
        lat: 48.7531,
        lon: -113.7271,
        area_1966: 1.0202,  // km²
        area_1998: 0.7159,  // km²
        area_2005: 0.6156,  // km²
        area_2015: 0.5637,  // km²
        percentLoss_1966_2015: 71,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Harris Glacier",
        lat: 48.7800,
        lon: -113.7600,
        area_1966: 0.1485,  // km²
        area_1998: 0.0403,  // km²
        area_2005: 0.0390,  // km²
        area_2015: 0.0343,  // km²
        percentLoss_1966_2015: 57,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Harrison Glacier",
        lat: 48.5919,
        lon: -113.7303,
        area_1966: 2.0594,  // km²
        area_1998: 1.8462,  // km²
        area_2005: 1.6977,  // km²
        area_2015: 1.6615,  // km²
        percentLoss_1966_2015: 52,
        nearestEntrance: "West Entrance"
    },
    {
        name: "Herbst Glacier",
        lat: 48.9862,
        lon: -114.0501,
        area_1966: 0.1702,  // km²
        area_1998: 0.0508,  // km²
        area_2005: 0.0409,  // km²
        area_2015: 0.0319,  // km²
        percentLoss_1966_2015: 91,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Hudson Glacier",
        lat: 48.9649,
        lon: -114.0453,
        area_1966: 0.0902,  // km²
        area_1998: 0.0558,  // km²
        area_2005: 0.0523,  // km²
        area_2015: 0.0522,  // km²
        percentLoss_1966_2015: 61,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Ipasha Glacier",
        lat: 48.8410,
        lon: -113.8128,
        area_1966: 0.3286,  // km²
        area_1998: 0.2283,  // km²
        area_2005: 0.1958,  // km²
        area_2015: 0.1947,  // km²
        percentLoss_1966_2015: 67,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Jackson Glacier",
        lat: 48.5979,
        lon: -113.7027,
        area_1966: 1.2805,  // km²
        area_1998: 0.8119,  // km²
        area_2005: 0.8033,  // km²
        area_2015: 0.7569,  // km²
        percentLoss_1966_2015: 76,
        nearestEntrance: "West Entrance"
    },
    {
        name: "Kintla Glacier",
        lat: 48.9280,
        lon: -114.1996,
        area_1966: 1.309,  // km²
        area_1998: 0.9729,  // km²
        area_2005: 0.9312,  // km²
        area_2015: 0.8777,  // km²
        percentLoss_1966_2015: 68,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Logan Glacier",
        lat: 48.6025,
        lon: -113.6352,
        area_1966: 0.5034,  // km²
        area_1998: 0.3875,  // km²
        area_2005: 0.3679,  // km²
        area_2015: 0.2190,  // km²
        percentLoss_1966_2015: 68,
        nearestEntrance: "Saint Mary's"
    },
    {
        name: "Lupfer Glacier",
        lat: 48.4762,
        lon: -113.5124,
        area_1966: 0.1264,  // km²
        area_1998: 0.0667,  // km²
        area_2005: 0.0638,  // km²
        area_2015: 0.0733,  // km²
        percentLoss_1966_2015: 57,
        nearestEntrance: "Two Medicine"
    },
    {
        name: "Miche Wabun Glacier",
        lat: 48.9471,
        lon: -113.8390,
        area_1966: 0.2045,  // km²
        area_1998: 0.1111,  // km²
        area_2005: 0.1075,  // km²
        area_2015: 0.1036,  // km²
        percentLoss_1966_2015: 61,
        nearestEntrance: "Polebridge"
    },
    {
        name: "N Swiftcurrent Glacier",
        lat: 48.7876,
        lon: -113.7676,
        area_1966: 0.1167,  // km²
        area_1998: 0.0845,  // km²
        area_2005: 0.0902,  // km²
        area_2015: 0.0863,  // km²
        percentLoss_1966_2015: 62,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Old Sun Glacier",
        lat: 48.8717,
        lon: -113.7789,
        area_1966: 0.4213,  // km²
        area_1998: 0.3491,  // km²
        area_2005: 0.3468,  // km²
        area_2015: 0.3411,  // km²
        percentLoss_1966_2015: 32,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Piegan Glacier",
        lat: 48.7075,
        lon: -113.6845,
        area_1966: 0.2802,  // km²
        area_1998: 0.2651,  // km²
        area_2005: 0.2508,  // km²
        area_2015: 0.2443,  // km²
        percentLoss_1966_2015: 21,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Pumpelly Glacier",
        lat: 48.5830,
        lon: -113.6591,
        area_1966: 1.0065,  // km²
        area_1998: 0.9106,  // km²
        area_2005: 0.9088,  // km²
        area_2015: 0.9028,  // km²
        percentLoss_1966_2015: 54,
        nearestEntrance: "Saint Mary's"
    },
    {
        name: "Rainbow Glacier",
        lat: 48.8786,
        lon: -114.0872,
        area_1966: 1.4304,  // km²
        area_1998: 1.1208,  // km²
        area_2005: 1.0900,  // km²
        area_2015: 1.0534,  // km²
        percentLoss_1966_2015: 26,
        nearestEntrance: "Polebridge"
    },
    {
        name: "Red Eagle Glacier",
        lat: 48.5936,
        lon: -113.6181,
        area_1966: 0.1347,  // km²
        area_1998: 0.0779,  // km²
        area_2005: 0.0779,  // km²
        area_2015: 0.0779,  // km²
        percentLoss_1966_2015: 87,
        nearestEntrance: "Saint Mary's"
    },
    {
        name: "Salamander Glacier",
        lat: 48.7566,
        lon: -113.7377,
        area_1966: 0.2290,  // km²
        area_1998: 0.1817,  // km²
        area_2005: 0.1736,  // km²
        area_2015: 0.1761,  // km²
        percentLoss_1966_2015: 30,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Sexton Glacier",
        lat: 48.7021,
        lon: -113.6356,
        area_1966: 0.4005,  // km²
        area_1998: 0.3240,  // km²
        area_2005: 0.3128,  // km²
        area_2015: 0.2987,  // km²
        percentLoss_1966_2015: 43,
        nearestEntrance: "Saint Mary's"
    },
    {
        name: "Shepard Glacier",
        lat: 48.8645,
        lon: -113.8566,
        area_1966: 0.2507,  // km²
        area_1998: 0.0916,  // km²
        area_2005: 0.0752,  // km²
        area_2015: 0.0707,  // km²
        percentLoss_1966_2015: 86,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Siyeh Glacier",
        lat: 48.7316,
        lon: -113.6551,
        area_1966: 0.3063,  // km²
        area_1998: 0.2146,  // km²
        area_2005: 0.2147,  // km²
        area_2015: 0.2054,  // km²
        percentLoss_1966_2015: 46,
        nearestEntrance: "Saint Mary's"
    },
    {
        name: "Sperry Glacier",
        lat: 48.6217,
        lon: -113.7590,
        area_1966: 1.3395,  // km²
        area_1998: 0.9531,  // km²
        area_2005: 0.8881,  // km²
        area_2015: 0.8017,  // km²
        percentLoss_1966_2015: 79,
        nearestEntrance: "West Entrance"
    },
    {
        name: "Swiftcurrent Glacier",
        lat: 48.7684,
        lon: -113.7448,
        area_1966: 0.2218,  // km²
        area_1998: 0.1887,  // km²
        area_2005: 0.1762,  // km²
        area_2015: 0.1703,  // km²
        percentLoss_1966_2015: 71,
        nearestEntrance: "Many Glacier"
    },
    {
        name: "Thunderbird Glacier",
        lat: 48.9352,
        lon: -114.0380,
        area_1966: 0.1351,  // km²
        area_1998: 0.1219,  // km²
        area_2005: 0.1160,  // km²
        area_2015: 0.1070,  // km²
        percentLoss_1966_2015: 90,
        nearestEntrance: "Polebridge"
    },

];

// Example popup function:
function createGlacierPopup(glacier) {
    return `
        <div style="font-family: Arial, sans-serif;">
            <h3 style="color: #3498db;">${glacier.name}</h3>
            <p><strong>1966:</strong> ${glacier.area_1966} km²</p>
            <p><strong>1998:</strong> ${glacier.area_1998} km²</p>
            <p><strong>2005:</strong> ${glacier.area_2005} km²</p>
            <p><strong>2015:</strong> ${glacier.area_2015} km²</p>
            <p><strong>Total Loss:</strong> ${(glacier.area_1966 - glacier.area_2015).toFixed(2)} km² (${glacier.percentLoss_1966_2015}%)</p>
            <p><strong>Nearest Entrance:</strong> ${glacier.nearestEntrance}</p>
        </div>
    `;
}
