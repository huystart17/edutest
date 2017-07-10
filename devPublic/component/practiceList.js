/**
 * Created by huy on 5/22/17.
 */
const m = require('mithril')
const unorderList = require('../template/unorderList')
const appLink = require('../template/appLink')

const subjectList = {
	oninit: vnode => {

	},
	view  : vnode => m('.db.fl.w-third-ns.w-100.f4.pa1.pb3',
		m('.ba.b--dashed.br3.bw1.b--green',
			m('.db.f2.ma2.b.bg-blue.white.pa2', vnode.attrs.subjectText),
			m(unorderList, {
				list: vnode.attrs.list
				           .filter(lesson => lesson.subject == vnode.attrs.subjectValue)
				           .map((lesson, index) => m(`.db.pa2`,
					           m(appLink, {
							           class: 'black',
							           href : '/practice/' + lesson._id + '/action/prepare',
							           title: lesson.title
						           },
						           m('.dib.w-60',
							           m.trust('&#8618;'),
							           lesson.name),
						           m('.dib.w-40.tr',
							           m('span.br4.pa1.ba.f6', lesson.duration == 0 ? m.trust('&#8734;') : lesson.duration + 'phút'))))
				           )

			})))
}
const practiceList = {
	oninit: vnode => {

	},
	view  : vnode =>
		[ m('.db.w-100.overflow-auto.pa2',
			[
				{subjectText: 'Môn Toán', subjectValue: 'toán'}
				, {subjectText: 'Môn Văn', subjectValue: 'văn'}
				, {subjectText: 'Tiếng Anh', subjectValue: 'anh'}

			].map(item => m(subjectList, {
				list        : vnode.attrs.list,
				subjectText : item.subjectText,
				subjectValue: item.subjectValue
			}))
		), m('.db.w-100.overflow-auto.pa2',
			[
				{subjectText: 'Sinh học', subjectValue: 'sinh'}
				, {subjectText: 'Vật lý', subjectValue: 'lý'}
				, {subjectText: 'Hóa học', subjectValue: 'hóa'}

			].map(item => m(subjectList, {
				list        : vnode.attrs.list,
				subjectText : item.subjectText,
				subjectValue: item.subjectValue
			}))
		) ]
};

module.exports = practiceList
