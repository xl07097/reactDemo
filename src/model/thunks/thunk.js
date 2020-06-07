import { getUserList } from '@/api/product';

export function asyncAdd(req) {
    return dispatch => {
        getUserList(req).then(res => {
            if (res.code === 200) {
                const { data=[] } = res.data;
                dispatch({
                    type: 'fetch_list',
                    list: data
                });
            }
        });
    };
}