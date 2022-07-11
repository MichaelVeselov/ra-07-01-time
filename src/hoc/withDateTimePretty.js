import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

function withDateTimePretty(Component) {
  return function (props) {
    const { date, ...otherProps } = props;
    const dateFormatted = moment(date).fromNow();
    return <Component date={dateFormatted} {...otherProps} />;
  };
}

export default withDateTimePretty;
