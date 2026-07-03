import re, json, pathlib
base=pathlib.Path('/mnt/data/k12_pack_v1')
files={
 'g3_5':'SKYLINE_K12_PLACEMENT_v1.0_2026-07-03_Moodle_GIFT_G3_5_AUTO_GRADE.gift',
 'g6_8':'SKYLINE_K12_PLACEMENT_v1.0_2026-07-03_Moodle_GIFT_G6_8_AUTO_GRADE.gift',
 'g9_12':'SKYLINE_K12_PLACEMENT_v1.0_2026-07-03_Moodle_GIFT_G9_12_AUTO_GRADE.gift',
}
section_map={'R':('reading','Academic English Reading'),'L':('language','Language Use & Academic Vocabulary'),'M':('math','Math Readiness'),'S':('science','Science / Social Studies Reading')}
all_data={}
for band,fn in files.items():
    txt=(base/fn).read_text(encoding='utf-8')
    # split at ::ID::
    parts=re.split(r'::([^:]+)::',txt)
    qs=[]
    for i in range(1,len(parts),2):
        qid=parts[i].strip()
        body=parts[i+1].strip()
        m=re.search(r'\{([\s\S]*?)\}\s*$', body)
        if not m:
            print('no options', qid); continue
        prompt=body[:m.start()].strip()
        opts_text=m.group(1).strip()
        opts=[]; correct=None
        for line in opts_text.splitlines():
            line=line.strip()
            if not line: continue
            if line[0] in '=~':
                val=line[1:].strip()
                if line[0]=='=': correct=len(opts)
                opts.append(val)
        sm=re.search(r'-(R|L|M|S)\d+$',qid)
        code=sm.group(1) if sm else 'R'
        sid,stitle=section_map[code]
        qs.append({
            'id': qid,
            'sectionId': sid,
            'sectionTitle': stitle,
            'prompt': prompt,
            'options': opts,
            'correctAnswerIndex': correct if correct is not None else 0
        })
    print(band, len(qs), {s:sum(1 for q in qs if q['sectionId']==s) for s,_ in section_map.values()})
    all_data[band]=qs
path='/mnt/data/work_v814/k12_questions.json'
open(path,'w',encoding='utf-8').write(json.dumps(all_data,ensure_ascii=False,indent=2))
print(path)
