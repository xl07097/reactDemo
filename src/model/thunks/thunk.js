import { getUserList } from '@/api/product';

export function asyncAdd(req) {
    return dispatch => {
        getUserList(req).then(data => {
            dispatch({
                type: 'fetch_list',
                list: data
            });
            // if (data.code === 200) {
            //     dispatch({
            //         type: 'fetch_list',
            //         list: data.data
            //     });
            // }
        });
    };
}