package admin

type VisualEditorSetting struct {
	Elements []*VisualEditorElement
}

type VisualEditorElement struct {
	Name     string
	Template string
	Resource *Resource
}
