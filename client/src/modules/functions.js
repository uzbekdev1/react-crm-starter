export const defineModule=(
	title,
	path,
	component,
	reducer=(state={})=>state,
	children=null,
	onEnter=null,
)=>{
	return {title,path,component,reducer,onEnter,children}
}

export const flatModules = modules => Object.keys(modules).map(x => {
    const res = Array.isArray(modules[x]) ? modules[x] : [modules[x]];
    res.forEach(y => y.MODULE = x)
    return res
  }).reduce((c,n) => c.concat(n));