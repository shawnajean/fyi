from db import Series

from cli.utils import (
    prompt,
    prompt_bool,
)


def get_or_create_series(session, name):
    series = session.query(Series).filter(Series.name == name).all()
    if len(series) == 0:
        series = Series(name=name)
        session.add(series)
    elif len(series) == 1:
        if prompt_bool('Series {} found, reuse?'.format(name)):
            return series[0]
        else:
            series = Series(name=name)
            series.add(series)
    elif len(series) > 1:
        raise Exception('Multiple series found for name')

    print('Creating series {}'.format(name))
    series_number = int(prompt('Book #?'))

    return series, series_number
