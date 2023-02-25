/*
Condition codes from weatherapi.com to decide which icon should be used
 */
export const findIcon = (code, timeOfDay) => {
  const translator = {
    1000: `clear-${timeOfDay}`,
    1003: `partly-cloudy-${timeOfDay}`,
    1006: `cloudy`,
    1009: `cloudy`,
    1030: `cloudy`,
    1063: `rain`,
    1066: `snow`,
    1069: `sleet`,
    1072: `sleet`,
    1087: `thunderstorm`,
    1114: `snow`,
    1117: `snow`,
    1135: `cloudy`,
    1147: `cloudy`,
    1150: `rain`,
    1153: `rain`,
    1168: `rain`,
    1171: `rain`,
    1180: `rain`,
    1183: `rain`,
    1186: `rain`,
    1189: `rain`,
    1192: `rain`,
    1195: `rain`,
    1198: `rain`,
    1201: `rain`,
    1204: `sleet`,
    1207: `sleet`,
    1210: `snow`,
    1213: `snow`,
    1216: `snow`,
    1219: `snow`,
    1222: `snow`,
    1225: `snow`,
    1237: `snow`,
    1240: `rain`,
    1243: `rain`,
    1246: `rain`,
    1249: `sleet`,
    1252: `sleet`,
    1255: `snow`,
    1258: `snow`,
    1261: `sleet`,
    1264: `sleet`,
    1273: `thunderstorm`,
    1276: `thunderstorm`,
    1279: `thunderstorm`,
    1282: `thunderstorm`
  }
  return `assets/icons/${translator[code]}.svg`
}
