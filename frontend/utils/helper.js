import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: '',
    ss: '%ss',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1m',
    MM: '%dM',
    y: '1y',
    yy: '%dY',
  },
});

export const chatTime = time => {
  const date1 = new Date(time);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return moment(time).format('L');
  }
  return moment(time).format('LT');
};

export const transformMentions = message =>
  message.replace(
    /@(\[[^]*\]\([^ ]*?\))/g,
    mention => `<a class="mention">@${mention.match(/\[(.*)\]/)[1]}</a>`
  );

const transformLinebreaks = (message, multi) => {
  if (multi) return message.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return message.match(/^.*$/m)[0];
};

const transformUrls = message =>
  message.replace(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
    url =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" class="Message__link"> ${url}</a>`
  );

export const transformMessage = (message, multi = true) =>
  ReactHtmlParser(transformLinebreaks(transformMentions(transformUrls(message)), multi));

export const getUsername = user => (user && user.name ? user.name : user.email);

export const awsUrl =
  process.env.AWS_S3_URL;

export const notificationHandler = title => {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    new Notification(title);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function(permission) {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        new Notification(title);
      }
    });
  }
};
