from pathlib import Path
from html import escape
OUT=Path(__file__).resolve().parents[2]/'public/lp/tools'
INK='#253441'; MUTED='#89939d'; BLUE='#534dff'; LINE='#e4e8ed'
def rect(x,y,w,h,fill='white',rx=8,stroke=LINE):
 return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}"/>'
def text(x,y,s,size=15,color=INK,weight=400):
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}">{escape(str(s))}</text>'
def pill(x,y,s,color=BLUE):
 return rect(x,y,100,28,'#eeedff',5,'none')+text(x+12,y+19,s,12,color)
def table(headers,rows,y=220):
 widths=[160,190,145,160]; xs=[208,368,558,703]; out=rect(188,y,770,40,'#f4f6f8',4,'none')
 for x,h in zip(xs,headers):out+=text(x,y+25,h,13,MUTED)
 for i,row in enumerate(rows):
  yy=y+40+i*49
  out+=f'<path d="M188 {yy+49}H958" stroke="{LINE}"/>'
  for x,v in zip(xs,row):out+=text(x,yy+30,v,14,BLUE if v in ['確認済み','収集済み','処理完了'] else INK)
 return out
def base(title,nav,body):
 out='<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="620" viewBox="0 0 1000 620"><g font-family="LINE Seed JP, Noto Sans JP, Hiragino Sans, sans-serif">'
 out+=rect(0,0,1000,620,'#fff',0,'none')+rect(0,0,162,620,'#f7f8fa',0,'none')
 out+=text(24,44,'Zeimee',25,INK,700)+text(22,89,'ワークスペース',11,MUTED)
 for i,n in enumerate(['レビュー','ファイル','顧問先','ダッシュボード','設定']):
  y=112+i*46
  if n==nav:out+=rect(12,y-22,138,36,'#eeedff',6,'none')
  out+=text(26,y,n,14,BLUE if n==nav else MUTED,600 if n==nav else 400)
 out+=text(22,575,'デモ事務所',13)+text(22,600,'ヘルプ  /  ログアウト',10,MUTED)
 out+=text(192,38,title,19,INK,700)+text(802,36,'サンプル株式会社',13,MUTED)+f'<path d="M162 60H1000" stroke="{LINE}"/>'
 out+=body+'</g></svg>'
 return out
def lead(title,sub,action):
 return text(194,108,title,25,INK,700)+text(194,138,sub,13,MUTED)+rect(793,85,165,39,BLUE,6,'none')+text(808,110,action,13,'white',600)
items={}
b=lead('仕訳レビュー','2026年9月  /  普通預金','会計ソフトへ反映')
b+=pill(194,164,'AI解析済み')+text(318,185,'未確認 5件',14)
b+=table(['取引日','取引内容','借方科目','金額'],[['09/02','事務用品の購入','消耗品費','12,800円'],['09/03','サービス利用料','通信費','8,800円'],['09/05','オフィス賃料','地代家賃','165,000円'],['09/06','振込手数料','支払手数料','330円'],['09/08','業務用備品','消耗品費','24,200円']])
items['bookkeeping']=base('記帳自動化AI','レビュー',b)
b=lead('事務所の生産性','2026年9月  /  全担当者','レポート出力')
for i,(label,value) in enumerate([('完了した業務','128 件'),('作業時間','246 h'),('顧問先数','32 社')]):
 x=194+i*258;b+=rect(x,168,240,106)+text(x+18,198,label,13,MUTED)+text(x+18,243,value,31,INK,700)
b+=rect(194,300,764,262)+text(216,333,'業務別の作業時間',16,INK,600)
for i,(label,w) in enumerate([('記帳',430),('証憑整理',290),('申告',365),('顧問先対応',210)]):
 y=358+i*46;b+=text(216,y+20,label,13)+rect(330,y,550,24,'#f3f4f8',4,'none')+rect(330,y,w,24,BLUE,4,'none')
items['productivity']=base('生産性管理ダッシュボード','ダッシュボード',b)
b=lead('証憑の収集状況','2026年9月  /  必要な資料をまとめて確認','資料を依頼')
b+=pill(194,167,'収集済み 18')+text(318,187,'未提出 4件',14)
b+=table(['資料','対象期間','提出状況','最終更新'],[['銀行通帳','2026年9月','収集済み','09/08'],['クレジット明細','2026年9月','収集済み','09/08'],['領収書','2026年9月','確認待ち','09/07'],['請求書','2026年9月','収集済み','09/06'],['給与明細','2026年9月','未提出','—']])
items['collection']=base('証憑収集AI','ファイル',b)
b=lead('顧問先一覧','担当者・決算月・業務状況をまとめて管理','顧問先を追加')
b+=rect(194,164,410,36,'#f8f9fb')+text(210,188,'顧問先名で検索',13,MUTED)
b+=table(['顧問先','担当者','決算月','業務状況'],[['サンプル株式会社','担当 A','3月','確認済み'],['デモ商事','担当 B','9月','レビュー中'],['サンプル工業','担当 A','12月','資料待ち'],['デモ企画','担当 C','3月','確認済み'],['サンプル事業所','担当 B','6月','レビュー中']])
items['clients']=base('顧問先管理','顧問先',b)
b=lead('証憑の自動振り分け','資料の内容に応じて、保存先を整理','振り分けを実行')
b+=rect(194,170,300,370)+text(216,208,'受け取った資料',17,INK,600)
for i,n in enumerate(['領収書_0902.pdf','請求書_0903.pdf','通帳_9月.pdf','カード明細_9月.csv','領収書_0908.pdf']):
 y=232+i*52;b+=rect(212,y,264,40,'#f7f8fa',5,'none')+text(226,y+25,n,14)
b+=text(519,363,'→',28,BLUE)
for i,(n,c) in enumerate([('領収書','2ファイル'),('請求書','1ファイル'),('通帳・明細','2ファイル')]):
 y=184+i*114;b+=rect(566,y,390,96)+rect(587,y+27,35,29,'#eeedff',4,'none')+text(642,y+42,n,17,INK,600)+text(642,y+69,c,13,MUTED)
items['folders']=base('証憑フォルダ分けAI','ファイル',b)
b=lead('法人税申告チェック','2026年3月期  /  サンプル株式会社','チェック開始')
b+=pill(194,164,'確認項目 12')+text(318,185,'要確認 2件',14)
b+=table(['確認項目','対象書類','結果','メモ'],[['利益金額の一致','別表四・決算書','確認済み','差異なし'],['繰越欠損金','別表七','要確認','前期からの繰越'],['減価償却費','別表十六','確認済み','差異なし'],['納付税額','別表一','確認済み','差異なし'],['交際費の集計','別表十五','要確認','明細との照合']])
items['tax-check']=base('法人税申告チェックAI','レビュー',b)
b=lead('会計データの引越し','勘定科目を対応付けて、移行データを作成','変換データを出力')
b+=rect(194,164,764,55,'#f7f8fb',6,'none')+text(220,199,'移行元データ',16,INK,600)+text(467,199,'→',24,BLUE)+text(603,199,'移行先の形式',16,INK,600)
b+=table(['移行元の科目','移行先の科目','対応状況','対象仕訳'],[['現金','現金','確認済み','126件'],['普通預金','普通預金','確認済み','248件'],['事務用品費','消耗品費','確認済み','42件'],['通信交通費','通信費','要確認','18件'],['売上高','売上高','確認済み','96件']],y=240)
items['migration']=base('会計ソフト引越しAI','レビュー',b)
b=lead('相続税の取引履歴','通帳の入出金を時系列に整理','取引履歴を出力')
b+=pill(194,164,'読取完了')+text(318,185,'対象期間 2021年〜2026年',14)
b+=table(['取引日','摘要','入出金額','分類'],[['2026/09/01','年金振込','＋148,000円','年金'],['2026/09/02','口座振替','−12,800円','公共料金'],['2026/09/03','現金引出','−100,000円','要確認'],['2026/09/04','定期預金解約','＋500,000円','資金移動'],['2026/09/05','振込','−300,000円','要確認']])
items['inheritance']=base('相続税取引履歴作成AI','レビュー',b)
b=lead('決算書の作成','2026年3月期  /  サンプル株式会社','決算書を出力')
b+=pill(194,164,'貸借対照表')+text(318,185,'損益計算書',14,MUTED)
for x,title,rows in [(194,'資産の部',[('現金及び預金','8,420,000'),('売掛金','3,180,000'),('棚卸資産','1,200,000'),('有形固定資産','4,600,000'),('資産合計','17,400,000')]),(584,'負債・純資産の部',[('買掛金','2,100,000'),('長期借入金','5,000,000'),('資本金','3,000,000'),('利益剰余金','7,300,000'),('負債・純資産合計','17,400,000')])]:
 b+=rect(x,224,374,326)+text(x+18,260,title,17,INK,600)
 for i,(label,value) in enumerate(rows):
  y=298+i*48
  b+=text(x+18,y,label,13)+text(x+242,y,value,14)+f'<path d="M{x+18} {y+15}H{x+356}" stroke="{LINE}"/>'
b+=text(866,584,'単位：円',12,MUTED)
items['financial-statements']=base('決算書作成AI','レビュー',b)
for slug,svg in items.items(): (OUT/(slug+'.svg')).write_text(svg)
print('Generated',len(items),'original UI mock SVGs')
